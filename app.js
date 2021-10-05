// Đặt 2 biến $ và $$ là để 1 chút không cần gõ lại chuổi dài dài "document.querySelector.bind(document);" nữa
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Select tất cả các tab item
const tabs = $$('.tab-item');
// Select tất cả các tab pane
const panes = $$('.tab-pane');


const tabActive = $('.tab-item.active');
const line = $('.tabs .line');

// Set css left và width cho nó ăn theo tab-item dc active, vì mỗi tab item có độ rộng khác nhau nên line cũng phải rộng như tab item dc active
// Để xem được các thuộc tính Css như (offsetLeft, offsetWidth) thì khi 'console.log([tabActive])' thì sổ xuống xem
// Mặc định offsetLeft=0 là dính sat mép trái tab-item dc click
line.style.left = tabActive.offsetLeft + 'px';
// Mặc định offsetWidth=độ rộng của tab-item dc click
line.style.width = tabActive.offsetWidth + 'px';



// Đặt vào [] để có thể kiểm tra ngắn gọn hơn lúc ban đầu (là dạng element html), bước này là bước kiểm tra xem có lấy đúng line và tab-item dc active hay chưa
console.log([tabActive]);
console.log([line]);




// Dùng vòng lặp để lặp qua tất cả các tab item để lắng nghe sự kiện click từng tab item
tabs.forEach((tab,index) => {
    // Các pane và các tab sẽ có cùng index nên làm cách này để khi click vào 1 tab thì pane tương ứng cũng chuyển theo
    const pane = panes[index];


    tab.onclick = function() {
        // Trước khi add active vào item dc click thì kiểm tra xem có tab nào dc active hay không để xóa active của tab đó
        // nếu ko có bước này thì click tới tab nào thì nó active tab đó và cái tab được active trước đó vẫn được active mà chưa bị mờ
        $('.tab-item.active').classList.remove('active');

        // Tương tự với tab-pane vì nếu ko remove như vậy thì khi click vào tab item thì nó lại sinh ra 1 pane tương ứng và cứ xếp chồng lên nhau 
        // chứ pane của tab trước không bị mất đi
        $('.tab-pane.active').classList.remove('active');

        
        // Lặp lại bước css bên trên để khi click vào tab khác thì line tương ứng tab item đó cũng chuyển theo, nếu ko lặp lại trong đoạn bắt
        // sự kiện này thì chỉ có tab item ban đàu được active mới có line của nó, chứ khi click tab khác thì không có line của tab dc click
        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';


        // add active vào tab nào dc click để nó active css đậm lên
        this.classList.add('active');
        // Tương tự với pane
        pane.classList.add('active');

    }
});


