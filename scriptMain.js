class Cosmetic {
    constructor(photo,information, name, rating, price,purchase) {
        this.photo = photo;
        this.information = information;
        this.name = name;
        this.rating = rating;
        this.price = price;
        this.purchase = purchase;
    }
}
let cosmetics = [
    new Cosmetic("1.png","Thông tin sản phẩm:Nước hoa làm thơm cơ thể", "Nước hoa nữ", "Đã bán 1000", 500000,"Thêm vào giỏ hàng"),
    new Cosmetic("2.jpg", "Thông tin sản phẩm:Lên màu chuẩn không lem trôi","Son kem lì Merzy", "Đã bán 1200", 180000,"Thêm vào giỏ hàng"),
    new Cosmetic("3.jpg","Thông tin sản phẩm:Bảo vệ toàn diện cho làn da luôn khỏe mạnh.", "Kem chống nắng", "Đã bán 1300", 100000,"Thêm vào giỏ hàng"),
    new Cosmetic("4.jpg","Thông tin sản phẩm:Giúp làm sạch sâu và cân bằng độ pH.Cung cấp độ ẩm dịu nhẹ cho làn da", "Nước hoa hồng", "Đã bán 1400", 90000,"Thêm vào giỏ hàng"),
    new Cosmetic("5.jpg","Thông tin sản phẩm:Giải pháp về làm sáng da và ngừa lão hóa", "Mặt nạ cấp nước dưỡng ẩm", "Đã bán 1500", 110000,"Thêm vào giỏ hàng"),
    new Cosmetic("6.jpg","Thông tin sản phẩm:Mang lại hiệu quả cho mọi làn da ngay cả làn da nhạy cảm và da mụn", "Sữa rửa mặt", "Đã bán 1600", 120000,"Thêm vào giỏ hàng"),
    new Cosmetic("7.jpg","Thông tin sản phẩm:Tiệp màu da cùng khả năng kiềm dầu hiệu quả cả ngày dài, phù hợp cho da dầu", "Kem nền", "Đã bán 1100", 150000,"Thêm vào giỏ hàng"),
    new Cosmetic("8.jpg","Thông tin sản phẩm:Sản phẩm giúp bổ sung nước và dưỡng chất cho làn da mềm mại, mịn màng", "Kem dưỡng ẩm", "Đã bán 1900", 200000,"Thêm vào giỏ hàng"), 
    new Cosmetic("9.jpg","Thông tin sản phẩm:Mascara Làm Dày Mi Gấp 10 Lần & Ngăn Rụng Mi", "Mascara", "Đã bán 2260", 220000,"Thêm vào giỏ hàng"),
    new Cosmetic("10.jpg","Thông tin sản phẩm:Có nhiều tông màu trong một bảng","Phấn mắt","Đã bán 2100",200000,"Thêm vào giỏ hàng"),
    new Cosmetic("11.jpg","Thông tin sản phẩm:Có mùi hương thơm và quyến rũ","Nước hoa nam","Đã bán 2200",100000,"Thêm vào giỏ hàng"),
    new Cosmetic("12.jpg","Thông tin sản phẩm:Kẻ mắt không bị lem","Kẻ mắt nước","Đã bán 2300",250000,"Thêm vào giỏ hàng"),
    new Cosmetic("13.jpg","Thông tin sản phẩm:Làm sạch da và lấy đi bụi bẩn","Nước tẩy trang","Đã bán 2400",300000,"Thêm vào giỏ hàng"),
    new Cosmetic("14.jpg","Thông tin sản phẩm:Dành cho da dầu mụn và gữ được lớp makeup lâu","Phấn phủ","Đã bán 2500",350000,"Thêm vào giỏ hàng"),
    new Cosmetic("15.jpg","Thông tin sản phẩm:Làm cho đôi môi mềm mại căng bóng","Son môi sáp","Đã bán 3000",320000,"Thêm vào giỏ hàng")
]
function renderCosmetic() {
    let row = document.querySelector('.row');
    for (let i = 0; i < cosmetics.length; i++) {
        row.innerHTML += `
        <div class="product">

                <div class="photo">
                    <img src="image/${cosmetics[i].photo}" alt="">
                    <p class="information">${cosmetics[i].information}</p>     
                </div>
                <div class="details">
                    <p class="name">${cosmetics[i].name}</p>
                    <p class="price">${formatCurrency(cosmetics[i].price)}</p>
                    <p class="rating">${cosmetics[i].rating}</p>
                </div>
                
                <button class="purchase">${cosmetics[i].purchase}<i class="fa-solid fa-cart-shopping"></i></button>
        
        </div>
        `
    }
}
function formatCurrency(number) {
    return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

renderCosmetic();