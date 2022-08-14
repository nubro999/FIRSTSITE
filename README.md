<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
  <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
    />

  <link rel="stylesheet" href="/css/reset.css">
  <link rel="stylesheet" href="/css/style.css"> 
</head>
<body>
  <header>
      <nav>
        <h1 class="animate__animated animate__bounce"> index.html </h1>
        <ul class="gnb">
          <li><a href="#">스토리</a></li>
          <li><a href="#">반려동물병원</a></li>
          <li><a href="#">커뮤니티</a></li>
        </ul>
      </nav>
  </header>
  <section class="bgAnimation">
    <div class="section-content">
      <h2>
        국내 최초! <span>반려동물보험 상품 비교서비스 <br>
          아이펫</span> 에서 one-stop으로 해결!
      </h2>
      <div class="icon-container">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
               <ul class="icons-slider">
                <li>
                  <i class='bx bxs-dog'></i>
                  <span>초 간단!</span>
                  <span>상품 비교 서비스</span>
                </li>
                <li>
                  <i class='bx bxs-duplicate'></i>
                  <span>5분 만에</span>
                  <span>가입가능</span>
                </li>
                <li>
                  <i class='bx bxs-duplicate'></i>
                  <span>국내최고 보험사의</span>
                  <span>반려동물보험</span>
                </li>
               </ul>
            </div>
            <div class="swiper-slide">
              <ul class="icons-slider">
                <li>
                  <i class='bx bxs-ambulance'></i>
                  <span>치료비, 배상책임,</span>
                  <span>장례비까지 세심한 보장</span>
                </li>
                <li>
                  <i class='bx bxs-building-house' ></i>
                  <span>전국 모든 동물병원을</span>
                  <span>이용하셔도 보장가능!</span>
                </li>
               </ul>
            </div>
          </div>
    
        </div>
      </div>
  
    </div>

    <!-- <i class='bx bxs-dog'></i>
    <i class='bx bxs-cat' ></i>
    <i class='bx bxs-duplicate'></i>
    <i class='bx bxs-ambulance'></i>
    <i class='bx bxs-building-house' ></i> -->
  </section>
  <section class="animalFormRegister">
      <div>
          <table>
            <tr>
              <td rowspan="4">간단한 정보 입력으로 <br>
                반려동물의 보장 내용을 <br>
                확인해 보세요
              </td>
              <td>반려동물 생년월일</td>
              <td>
                <input type="date">
              </td>
            </tr>
            <tr>
               
              <td>반려동물 이름</td>
              <td>
                <input type="text" name="animalName" id="animalName" >
              </td>
            </tr>
            <tr>
               
              <td>반려동물 선택</td>
              <td>
                <input type="radio" name="animalType" id="dog">
                <label for="dog">강아지</label>
                
                <input type="radio" name="animalType" id="cat">
                <label for="cat">고양이</label>
              </td>
            </tr>
            <tr>
               
              <td>최근 90일 이내<br>  치료이력</td>
              <td>
                <input type="radio" name="hospital" id="yes">
                <label for="yes">있음</label>
                
                <input type="radio" name="hospital" id="no">
                <label for="no">없음</label>
              </td>
            </tr>
            <tr class="hide active">
               
              <td>반려동물 등록증 </td>
              <td>
                <input type="radio" name="confirm" id="yes">
                <label for="yes">있음</label>
                
                <input type="radio" name="confirm" id="no">
                <label for="no">없음</label>
              </td>
            </tr>
          </table>

          <a href="#" class="btn">반려동물 보험 보장내용 조회</a>
      </div>
  </section>
  <section></section>
  <section></section>
  <footer></footer>
  <script src="/script/main.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
  <script>
    // swiperjs 
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      effect: "fade",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  </script>
</body>
</html>
