function makeReservation() {
  // 取得表單中的數據
  const guestName = document.getElementById("guestName").value;
  const checkInDate = document.getElementById("checkInDate").value;
  const checkOutDate = document.getElementById("checkOutDate").value;

  // 發送 POST 請求到後端
  fetch("http://localhost:3000/makeReservation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ guestName, checkInDate, checkOutDate }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // 顯示成功畫面
      document.getElementById("reservationForm").style.display = "none";
      document.getElementById("successMessage").style.display = "block";
    })
    .catch((error) => {
      console.error("Error:", error);
      // 可以在此處添加顯示錯誤消息的操作
    });
}
