FROM php:7.4-fpm

WORKDIR /var/www/html

RUN apt-get update \
    && apt-get install -y \
        libzip-dev \
        libpng-dev \
        libjpeg-dev \
        libfreetype6-dev \
        unzip \
        libonig-dev \
        libpq-dev \
        libssl-dev \
        libwebp-dev \
        libpng-dev \
        libjpeg-dev \
        libxpm-dev \
        libfreetype6-dev \
        libxml2-dev \
        zlib1g-dev \
        libsqlite3-dev \
        libsqlite3-0 \
        redis-tools \
    && docker-php-ext-install \
        pdo \
        pdo_mysql \
        gd \
        zip \
        opcache \
        sockets \
        bcmath \
        mysqli \
        pcntl \
        exif \
        tokenizer \
        xml \
        ctype \
        json \
        mbstring \
        gettext \
        calendar \
        shmop \
        soap \
        intl \
        sysvmsg \
        sysvsem \
        sysvshm \
    && pecl install redis \
    && docker-php-ext-enable redis

COPY . .

RUN chmod -R 755 storage bootstrap/cache

CMD ["php-fpm"]
