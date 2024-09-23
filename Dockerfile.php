# Use the official PHP image as base
FROM php:7.4-fpm

# Install dependencies
RUN apt-get update && apt-get install -y \
build-essential \
libpng-dev \
libjpeg62-turbo-dev \
libfreetype6-dev \
locales \
zip \
unzip \
git \
curl \
redis \
libonig-dev \
libxml2-dev \
nano

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install gd pdo pdo_mysql mbstring exif pcntl bcmath xml ctype json

RUN pecl install redis && \
docker-php-ext-enable redis

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set working directory
WORKDIR /var/www/traffic

# Copy composer.json and composer.lock first for better cache on rebuild
COPY composer.json composer.lock ./

# Install project dependencies
RUN composer install --no-scripts --no-autoloader

# Copy application files
COPY . .

# Generate optimized autoload files
#RUN composer dump-autoload --optimize

# Expose port 9000 and start PHP-FPM server
EXPOSE 9000
CMD ["php-fpm"]
