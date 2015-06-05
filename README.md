
[TOC]

# Cấu trúc thư mục

Thư mục     | Description
--------    | ---
css         | Chứa css của toàn bộ project. Chứa 3 file css của [**foundation**][foundation]. Ko cần đụng tới
img         | Chứa hình ảnh của toàn bộ project, bao gồm img,icon
js          | chứa các file js của [**foundation**][foundation]. Không cần đụng tới
module      | chứa các Thư Mục module của extension.
__background | Chứa file background.js. Xem thêm [**Background**][1].
__browseraction | Chứa file browseraction.js/popup.[html/js]. Xem thêm [**Browser Action**][2]
__pageaction | Chứa file pageaction.[html/js]. Xem thêm [**Page Action**][3]
__panel | Chứa file panel.[html/js]. Xem thêm [**Panel**][4]
__contentscript | Chứa file contentscript.js. Xem thêm [**Content Script**][5]
manifest.json          | là metadata của extension. Xem thêm tại [**Manifest**][manifest]

## Background

![Background]( https://developer.chrome.com/static/images/overview/arch-1.gif)

Nút màu xanh là **Page Action**. Nút màu vàng là **Browser Action**. Cả 2 nút đều được điều khiển hành vi bởi 1 trang gọi là **background**. Có 2 loại **background** là **persistent**(mãi mãi) và **non-persistent**(Event Page)

> [**Event Page**][eventpage]: Chúng ta sẽ tập trung vào Event Page. Event Page là dạng background chỉ chạy khi có event xảy ra. 

## Browser Action
![Browser Action](https://developer.chrome.com/static/images/overview/browser-action-with-popup.png)

Đây là Browser Action. Bao gồm :

 - Icon nằm **cạnh** thanh URL
 - Popup hiện ra khi click vào

## Page Action
![Page Action](https://developer.chrome.com/static/images/overview/page-action.png)

Bao gồm:

 - Icon nằm **trong** thanh URL
 - Popup hiện ra khi click vào

## Panel
![Panel](http://i.stack.imgur.com/Yo8VK.png)

Bao gồm tất cả những gì thuộc về **Inspect Element**

##Content Script
![Content Script](https://developer.chrome.com/static/images/overview/arch-3.gif)

Content Script là những đoạn js được chèn vào trực tiếp trang web đang chạy.

# Các kỹ thuật cần nắm
## Message Passing
> [Xem Thêm][message-passing] : là kỹ thuật giao tiếp giữa các *Module* extension với nhau. 
> Ví dụ: Giao tiếp giữa Page Action và Content Script

# Chrome API
>Thảm khảo thêm [**ở đây**][chrome-api]

Các API cần chú ý nhiều:
## chrome.tabs
## chrome.extension
>Có thể sử dụng cho hầu hết các *module* trong extension. 
## chrome.devtools.panel
## chrome.runtime
## chrome.events

[1]:#background
[2]:#browser-action
[3]:#page-action
[4]:#panel
[5]:#content-script
[manifest]:https://developer.chrome.com/extensions/manifest
[foundation]:http://foundation.zurb.com/docs/
[eventpage]:https://developer.chrome.com/extensions/event_pages
[chrome-api]:https://developer.chrome.com/extensions/api_index
[message-passing]: https://developer.chrome.com/extensions/messaging
