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
                            <div class="col-12" data-v-a1b911ec>
                                <div class="dot-flashing" style="margin: auto;" data-v-a1b911ec></div>
                                <br>
                            </div>
                            <h2 class="guild-title title-short" data-v-a1b911ec>HƯỚNG DẪN CÁCH XÁC MINH</h2>
                            <div class="col-12" data-v-a1b911ec>
                                <p class="note-vpn" data-v-a1b911ec>LƯU Ý: KHÔNG SỬ DỤNG ẨN DANH HOẶC VPN, 1.1.1.1 KHI VƯỢT LINK</p>

                            </div>
                            <div class="guild-paragraph" data-v-a1b911ec>
                                <p class="mb-8" style="display: flex; align-items: center;">
                                    <strong style="color:red">Bước 1:</strong>
                                    Truy cập vào <img src="https://i.imgur.com/krAw9Pj.png" width="80px">

                                </p>
                                <div><strong style="color:red">Bước 2: </strong>Tìm kiếm từ khóa:
                                    <strong>{{$title}}</strong>
                                    <div onclick="copy('{{trim($title)}}')" class="copy-it"
                                         style="display: inline-block;margin-left: 10px; font-weight: 700; cursor: pointer"
                                         data-clipboard-text="" data-toggle="tooltip" data-placement="top" title=""
                                         data-original-title="Ấn để sao chép"><i style="color: red" class="fa fa-clone"></i>
                                        <small style="color: red">Copy</small></div>
                                </div>
                                <p style="position: relative;"><img src="https://i.imgur.com/C978o1R.png" width="100%"
                                                                    style="min-height: 50px;">
                                    <strong style="position: absolute; top: 30%; left: 10%; color: red;">{{$title}}</strong>
                                </p>
                                <div class="guild-paragraph" data-v-a1b911ec>
                                    <p><strong style="color:red">Bước 3: </strong><i class="fa fa-search"
                                                                                     style="font-size:20px;color:red"></i>
                                        Tìm rồi bấm vào kết quả giống hình dưới <i class="fa fa-level-down"
                                                                                   style="font-size:20px;color:red"></i>
                                        <strong>Đúng trang mới Unlock nhé.</strong></p>
                                    <img width="100%" style="border: 2px solid #Ff7500; object-fit: cover"
                                         src="{{$page->description}}">
                                    <p style="text-align: center;"><img src="https://i.imgur.com/BTIfrbt.png"
                                                                        width="100%"><br><small><i>(Nếu trang 1 không có hãy
                                                tìm ở trang 2 nhé )</i></small></p>
                                </div>
                                <div class="guild-paragraph" data-v-a1b911ec>
                                    <p data-v-a1b911ec><strong style="color:red">Bước 4:</strong> <strong style="color:blue;">Kéo lên - kéo
                                            xuống và ở lại trang website </strong> ở <strong style="color:red"> Bước
                                            3 </strong> sau khoảng <strong style="color:red"> 50s </strong> quay lại trang
                                        này, liên kết sẽ được mở khóa.</p>
                                </div>

                                <div style="display: flex; justify-content: center">
                                    <a class="btn btn-primary next-link" href="#"
                                       style="display: flex; align-items: center">Đang xác minh...
                                        <img style="height: 25px " src="{{asset('images/loading.gif')}}">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr class="mb-32" data-v-a1b911ec>
                        <div class="col-12" data-v-a1b911ec>
                            <h2 class="guild-title title-short" data-v-a1b911ec>LÀM ĐÚNG ĐẨY ĐỦ CÁC BƯỚC TRÊN ĐỂ MỞ KHÓA
                                NHÉ!</h2>
                        </div>
                    </div>
                </div>
        </section>
        <section class="guild-video-container" data-v-a1b911ec>
            <div class="container" data-v-a1b911ec>
                <div class="guild-video section-box" data-v-a1b911ec>
                    <div class="row" data-v-a1b911ec>
                        <div class="col" data-v-a1b911ec>
                            <h2 class="guild-title" data-v-a1b911ec>VIDEO HƯỚNG DẪN CÁCH LẤY MÃ</h2>
                            <div class="video-box" data-v-a1b911ec>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/-NDKDkwFjrk"
                                        title="YouTube video player" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen="allowfullscreen" data-v-a1b911ec></iframe>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
