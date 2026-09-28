const calcType = document.getElementById("calcType");
const calcVal = document.getElementById("calcVal");
const calcBtn = document.getElementById("calcBtn");
const resTotal = document.getElementById("resTotal");
const resMsg = document.getElementById("resMsg");

function startCalc() {
    const val = Number(calcVal.value);
    const type = calcType.value;
    
    if (val <= 0) {
        resMsg.textContent = "يرجى إدخال رقم صحيح!";
        resMsg.style.color = "red";
        resTotal.textContent = "0 د.أ";
        return;
    }

    let price = 0;
    if (type === "area") price = val * 3; 
    if (type === "elec") price = val * 4.5;   
    if (type === "plumb") price = val * 80;   

    resTotal.textContent = price + " د.أ";
    resMsg.textContent = "تم الحساب بنجاح حسب أسعار السوق!";
    resMsg.style.color = "green";
}

if (calcBtn) {
    calcBtn.addEventListener("click", startCalc);
}


const deliveryCity = document.getElementById("deliveryCity");
const checkDeliveryBtn = document.getElementById("checkDeliveryBtn");
const shippingCost = document.getElementById("shippingCost");
const shippingTime = document.getElementById("shippingTime");
const serviceStatus = document.getElementById("serviceStatus");

function calculateDelivery() {
    const city = deliveryCity.value;

    if (city === "irbid") {
        shippingCost.textContent = "2.00 د.أ";
        shippingTime.textContent = "خلال 24 ساعة";
        serviceStatus.textContent = "متوفرة";
        serviceStatus.className = "badge bg-success";
    } else if (city === "amman") {
        shippingCost.textContent = "3.50 د.أ";
        shippingTime.textContent = "24 - 48 ساعة";
        serviceStatus.textContent = "متوفرة";
        serviceStatus.className = "badge bg-success";
    } else if (city === "other") {
        shippingCost.textContent = "5.00 د.أ";
        shippingTime.textContent = "2 - 3 أيام عمل";
        serviceStatus.textContent = "محدودة";
        serviceStatus.className = "badge bg-warning text-dark";
    }
}

if (checkDeliveryBtn) {
    checkDeliveryBtn.addEventListener("click", calculateDelivery);
}


const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = searchInput.value.trim().toLowerCase();

        if (query === "") {
            alert("يرجى كتابة كلمة للبحث عنها!");
            return;
        }

        if (query.includes("صحي") || query.includes("حمام") || query.includes("مواسير")) {
            window.location.href = "sanitary.html";
        } else if (query.includes("كهرباء") || query.includes("سلك") || query.includes("ابريز")) {
            window.location.href = "electrical.html";
        } else if (query.includes("دهان") || query.includes("عزل")) {
            window.location.href = "paints.html";
        } else if (query.includes("عدد") || query.includes("أدوات")) {
            window.location.href = "industrial.html";
        } else if (query.includes("مسبح") || query.includes("مسابح")) {
            window.location.href = "pools.html";
        } else if (query.includes("حداد") || query.includes("نجار")) {
            window.location.href = "blacksmith.html";
        } else {
            alert(`جاري البحث عن: "${query}".. نأسف، يرجى تصفح الأقسام مباشرة.`);
        }
    });
}


const popup = document.getElementById("randomDiscountPopup");
const closePopupBtn = document.getElementById("closePopupBtn");
const popupDiscountBtn = document.getElementById("popupDiscountBtn");
const popupDiscountResult = document.getElementById("popupDiscountResult");

if (popup) {
    setTimeout(() => {
        popup.style.display = "block";
    }, 2000);

    closePopupBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    popupDiscountBtn.addEventListener("click", () => {
        const discount = Math.floor(Math.random() * 20) + 5;
        popupDiscountResult.textContent = "مبروك! حصلت على خصم " + discount + "%";
    });

    setInterval(() => {
        if (popup.style.display !== "none") {
            const randomBottom = Math.floor(Math.random() * 150) + 20;
            const randomRight = Math.floor(Math.random() * 150) + 20;

            popup.style.bottom = randomBottom + "px";
            popup.style.right = randomRight + "px";
        }
    }, 8000);
}