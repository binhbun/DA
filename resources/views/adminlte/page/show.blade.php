@extends('adminlte.page.layouts.app')
@section('content')
                    <main class="main-bg" data-v-a1b911ec>
                        <section class="convert-container" style="display:;" data-v-a1b911ec>
                            
                        </section>
                        <section class="guild-container" data-v-a1b911ec>
                            <div class="container" data-v-a1b911ec>
                                <div class="guild section-box" data-v-a1b911ec>
                                    <div class="row" data-v-a1b911ec>
                                        <div class="col" data-v-a1b911ec>
                                            <h2 class="guild-title title-short" data-v-a1b911ec>HƯỚNG DẪN CÁCH LẤY MÃ</h2>
                                            <div class="col-12" data-v-a1b911ec>
                                                <p class="note-vpn" data-v-a1b911ec>LƯU Ý: KHÔNG SỬ DỤNG ẨN DANH HOẶC VPN, 1.1.1.1 KHI VƯỢT LINK</p>

                                            </div>
                                            <div class="guild-paragraph" data-v-a1b911ec>
                                                <p class="mb-8" style="display: flex; align-items: center;">
                                                    <strong style="color:red">Bước 1:</strong>
                                                    Truy cập vào <img src="https://i.imgur.com/krAw9Pj.png" width="80px">
                                                </p>
                                                <div><strong style="color:red">Bước 2: </strong>Tìm kiếm từ khóa: <strong>{{$title}}</strong><div onclick="copy('{{trim($title)}}')" class="copy-it" style="display: inline-block;margin-left: 10px; font-weight: 700; cursor: pointer" data-clipboard-text="" data-toggle="tooltip" data-placement="top" title="" data-original-title="Ấn để sao chép"><i style="color: red" class="fa fa-clone"></i> <small style="color: red">Copy</small></div></div>
                                                <p style="position: relative;"><img src="https://i.imgur.com/C978o1R.png" width="100%" style="min-height: 50px;">
                                                    <strong style="position: absolute; top: 30%; left: 10%; color: red;">{{$title}}</strong>
                                                </p>
                                            <div class="guild-paragraph" data-v-a1b911ec>
                                                <p><strong style="color:red">Bước 3: </strong><i class="fa fa-search" style="font-size:20px;color:red"></i> Tìm rồi bấm vào kết quả giống hình dưới <i class="fa fa-level-down" style="font-size:20px;color:red"></i> <strong>Đúng trang mới có Mã.</strong></p>
                                                <img width="100%" style="border: 2px solid #Ff7500; object-fit: cover" src="{{$page->description}}">
                                                <p style="text-align: center;"><img src="https://i.imgur.com/BTIfrbt.png" width="100%"><br><small><i>(Nếu trang 1 không có hãy tìm ở trang 2 nhé )</i></small></p>
                                            </div>
                                            <div class="guild-paragraph" data-v-a1b911ec>
                                                <p><strong style="color:red">Bước 4:</strong> Tìm và <strong style="color:blue;">click vào 1 trong các button</strong> <strong style="color:red"> như hình minh họa bên dưới </strong></span> và chờ 1 lát để lấy mã!
                                                </p>
                                                <center>
                                                <!-- <img style="object-fit: cover" class="logo-mobile" src="{{asset('images/buttondown1s.png')}}" alt="button" width="60%"> -->
                                         <span>  <img style="object-fit: cover" class="logo-mobile" src="/images/buttonlv11.png" alt="button" width="30%">
                                            <img style="object-fit: cover" class="logo-mobile" src="https://i.imgur.com/Ij4PZqC.png" alt="button" width="30%"></span>
                                            <br><strong style="color:red"> HOẶC </strong>
                                                <br>
                                            <img style="object-fit: cover" class="logo-mobile" src="/images/buttonlv22.png" alt="button" width="95%">
                                        </center>
                                            
                                            </div>
                                            <div class="guild-paragraph" data-v-a1b911ec>
                                                <p data-v-a1b911ec><strong style="color:red">Bước 5:</strong> Nhập mã xác nhận vào ô bên dưới.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-32" data-v-a1b911ec>
                                        <div class="col-12" data-v-a1b911ec>
                                            <form id="fm" >
{{--            @csrf--}}
                                                    <input type="hidden" name="_id" value="{{$page->id}}" />
                                                    <input type="hidden" name="link_id" value="{{$link->id}}" />
                                                    <!-- <p style="font-size: 16px; font-weight: 700; text-align: center;" >NHẬP MẬT MÃ ĐỂ CHUYỂN HƯỚNG </p> -->
                                                    <div class="form-group">
                                                        <input type="text" style="padding: 15px; border: 2px solid red; object-fit: cover;" class="form-control" placeholder="Nhập mã để tiếp tục" id="input-field" name="code">
                                                    </div>
                                                </form>
                                            <div class="password-form" data-v-a1b911ec>

                                                <button id="check222" type="submit" role="button" class="btn password-btn box-botton" data-v-a1b911ec style="background: #fbd943">Bấm vào đây để mở khóa</button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="mb-32" data-v-a1b911ec>
                                    <div class="col-12" data-v-a1b911ec>
                                                    <h2 class="guild-title title-short" data-v-a1b911ec>LÀM ĐÚNG ĐẨY ĐỦ CÁC BƯỚC TRÊN ĐỂ LẤY MÃ NHÉ!</h2>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- <section class="guild-video-container" data-v-a1b911ec>
                            <div class="container" data-v-a1b911ec>
                                <div class="guild-video section-box" data-v-a1b911ec>
                                    <div class="row" data-v-a1b911ec>
                                        <div class="col" data-v-a1b911ec>
                                            <h2 class="guild-title" data-v-a1b911ec>VIDEO HƯỚNG DẪN CÁCH LẤY MÃ</h2>
                                            <div class="video-box" data-v-a1b911ec>
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/dTsrLvrdSWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="allowfullscreen" data-v-a1b911ec></iframe>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section> -->
                        <br>
                    </main>   
                    <div id="indexModal">
        <div class="modal-content">
            <a href="https://minuc.xyz/signup.php?ref=kbtnbytshn" target="_blank">
                <img src="https://i.imgur.com/VUkhidx.jpeg" alt="Popup Image" class="popup-img">
            </a>
            <button class="close-button" name="btnclose" onclick="hidetb()">❌ Đóng</button>
        </div>
    </div>

    <script type="text/javascript">
        function hidetb() {
            document.getElementById("indexModal").style.display = 'none';
        }
        window.onclick = function(event) {
            var modal = document.getElementById("indexModal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    </script>
                    @endsection
        <script src="{{ asset('ckeditor/ckeditor.js')}}"></script>
        <script>
            $(document).ready(function (){
                $(window).keydown(function(event){
                    if(event.keyCode == 13) {
                        event.preventDefault();
                        return false;
                    }
                });
                $('#check222').click(function (e){
                    $(this).attr('disabled','disabled')
                    const data = $('#fm').serialize()
                    $.ajax({
                        url: '{{route('page.get-link-by-code')}}',
                        data: data,
                        type: 'post',
                        success: function (ad){
                            window.location.href = ad
                        },
                        error: function (err) {
                            console.log(err)
                            toastr.error(err.responseJSON.message)
                        }
                    })
                    setTimeout(() => {
                        $(this).removeAttr('disabled')
                    }, 2000)
                })
            })
        </script>

        </html>
        <script src="https://code.jquery.com/jquery-3.6.3.js"></script>
        <script>
            function copy(data) {
                let text = data
                {{--text = '{{route('home.nextpage', data)}}'+'?id='+data--}}
                toastr.success('Sao chép thành công!')
                if (window.clipboardData && window.clipboardData.setData) {
                    // IE: prevent textarea being shown while dialog is visible
                    return window.clipboardData.setData("Text", text);

                } else if (document.queryCommandSupported &&
                    document.queryCommandSupported("copy")) {
                    var textarea = document.createElement("textarea");
                    textarea.textContent = text;
                    // Prevent scrolling to bottom of page in MS Edge
                    textarea.style.position = "fixed";
                    document.body.appendChild(textarea);
                    textarea.select();
                    try {
                        // Security exception may be thrown by some browsers
                        return document.execCommand("copy");
                    } catch (ex) {
                        console.warn("Sao chép không thành công!", ex);
                        return false;
                    } finally {
                        document.body.removeChild(textarea);
                    }
                }
            }
            let check = false
            let tt = 0
            $('.s-t').click(function (e) {
                if (check) {
                    $('.logo-mobile').css('opacity', 1)
                    $('#mainNav').hide()
                } else {
                    $('.logo-mobile').css('opacity', 0)
                    $('#mainNav').show()
                }
                check = !check
            })
            $(window).scroll(function () {
                if ($(this).scrollTop() >= tt) {
                    $('.intro').hide()
                } else {
                    $('.intro').show()
                }

                if ($(this).scrollTop() >= $('#main').offset().top) {
                    $('#mainNav').css("background", '#162239')
                    $('#nav-mobile').css("background", '#162239')
                } else {
                    $('#mainNav').css("background", '')
                    $('#nav-mobile').css("background", '')
                }
            })
            $(document).ready(function () {
                tt = $('#main').offset().top - $('.intro').height() - $('.intro').position().top
            })

            window.addEventListener('pageshow', function (event) {
                // Kiểm tra xem sự kiện pageshow có phải là do người dùng nhân đôi tab không
                if (event.persisted) {
                    // Reload trang khi người dùng nhân đôi tab
                    window.location.reload();
                }
            });
        </script>

        <script src="/js/87bd405.js" defer></script>
        <script src="/js/671153e.js" defer></script>
        <script src="/js/0c601fb.js" defer></script>
        <script src="/js/5d25880.js" defer></script>
        <script src="/js/472dbe1.js" defer></script>
        <script src="/js/demo.js" defer></script>
        <script src="/js/e4dbed1.js" defer></script>
        <script src="/js/768d2fe.js" defer></script>
        <style>
            /* CSS */
            .sub_menu {
                display: none;
                position: absolute;
                list-style: none;
                padding: 0;
                margin: 0;
                background-color: #fff; /* Màu nền menu con */
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Đổ bóng */
                border-radius: 10px; /* Bo viền tròn */
                text-align: center; /* Căn giữa nội dung */
            }

            .has_submenu {
                position: relative;
            }

            .has_submenu:hover .sub_menu {
                display: block;
                top: 100%; /* Hiển thị sub_menu ngay dưới has_submenu */
                left: 50%; /* Căn giữa theo chiều ngang */
                transform: translateX(-50%); /* Dịch chuyển về trung tâm */
            }

            /* Thêm kiểu cho các mục sub_menu */
            .sub_menu li {
                padding: 10px;
            }

            .sub_menu li:hover {
                background-color: #f0f0f0; /* Màu nền khi di chuột vào mục */
            }
        </style>

        <!-- Đoạn mã JavaScript (cần jQuery) -->
        <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
        <script>
            $(document).ready(function() {
                // Xử lý sự kiện khi nhấp vào liên kết "Đăng ký" trên di động
                $("#registerLink").click(function(e) {
                    e.preventDefault(); // Ngăn chặn chuyển hướng trang

                    // Hiển thị hoặc ẩn menu con tương ứng
                    $(".sub_menu").toggle();
                });
            });
        </script>
    </body>
</html>
