import React from 'react';

const QuitUser = () => {
  if (sessionStorage.getItem("quitCheck") != "ok") {
    window.location.href = "/mypage/quitUserCheck";
  }
  const userId = sessionStorage.getItem("id");
  const email = sessionStorage.getItem("email");
  return (
    <div class="col-9 mx-auto">
      <h3><b>HanBook 계정삭제</b></h3>
      <hr style={{ width: "100%" }} />
      <div class="border border-dark my-auto text-center">
        <br />
        <b class="fs-3">중요한 내용이므로 주의 깊게 읽어 주세요.</b><br /><br />
        <p class="fs-5">다양한 HanBook 서비스에 엑세스 할 수 있는 계정을 삭제하려고 합니다. 더 이상 <b>{email}</b> 계정으로 HanBook 서비스를 이용할 수 없으며 계정과 데이터가 삭제됩니다.</p>
      </div>

      <p class="fs-4 text-center">더 나은 서비스를 만드는 HanBook이 되겠습니다. </p>
      <p class="fs-5 text-center">다음에도 많은 관심과 이용 부탁드립니다.</p>
      <div class="mx-auto">
        <button type="button" class="btn btn-danger p-2 fs-5"
          onClick={() => {
            const check = window.confirm("회원 탈퇴를 하시겠습니까?\n 삭제하면 모든 정보는 다시 찾을 수 없습니다.");
            if (check) {
              alert("회원탈퇴 진행하기");
              window.location.href = "/";
              sessionStorage.removeItem("quitCheck");
              sessionStorage.removeItem("userId");
              sessionStorage.removeItem("email");
              sessionStorage.removeItem("password");

            } else {
              alert("원상태 그대로 고민하기");
            }
          }}>회원탈퇴</button>
      </div>
    </div>
  );
};

export default QuitUser;