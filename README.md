- [Cấu trúc thư mục](#cu-trc-th-mc)
  - [Background](#background)
  - [Browser Action](#browser-action)
  - [Page Action](#page-action)
  - [Panel](#panel)
  - [Content Script](#content-script)

- [Các kỹ thuật cần nắm](#cc-k-thut-cn-nm)
  - [Message Passing](#message-passing)

- [To-Do list](#to-do-list)
- [Implement](#implement)
- [Chrome API](#chrome-api)
  - [chrome.tabs](#chrometabs)
  - [chrome.extension](#chromeextension)
  - [chrome.devtools.panel](#chromedevtoolspanel)
  - [chrome.runtime](#chromeruntime)
  - [chrome.events](#chromeevents)

# Cấu trúc thư mục

Thư mục          | Description
---------------- | ---------------------------------------------------------------------------------------------------------------------
css              | Chứa css của toàn bộ project. Chứa 3 file css của [**foundation**](http://foundation.zurb.com/docs/). Ko cần đụng tới
img              | Chứa hình ảnh của toàn bộ project, bao gồm img,icon
js               | chứa các file js của [**foundation**](http://foundation.zurb.com/docs/). Không cần đụng tới
module           | chứa các Thư Mục module của extension.
\__background    | Chứa file background.js. Xem thêm [**Background**](#background).
\__browseraction | Chứa file browseraction.js/popup.[html/js]. Xem thêm [**Browser Action**](#browser-action)
\__pageaction    | Chứa file pageaction.[html/js]. Xem thêm [**Page Action**](#page-action)
\__panel         | Chứa file panel.[html/js]. Xem thêm [**Panel**](#panel)
\__contentscript | Chứa file contentscript.js. Xem thêm [**Content Script**](#content-script)
\__other         | Các file js khác không biết để đâu.
manifest.json    | là metadata của extension. Xem thêm tại [**Manifest**](https://developer.chrome.com/extensions/manifest)

## Background
![Background](https://developer.chrome.com/static/images/overview/arch-1.gif)

Nút màu xanh là **Page Action**. Nút màu vàng là **Browser Action**. Cả 2 nút đều được điều khiển hành vi bởi 1 trang gọi là **background**. Có 2 loại **background** là **persistent**(mãi mãi) và **non-persistent**(Event Page)

> [**Event Page**](https://developer.chrome.com/extensions/event_pages): Chúng ta sẽ tập trung vào Event Page. Event Page là dạng background chỉ chạy khi có event xảy ra.

## Browser Action
![Browser Action](https://developer.chrome.com/static/images/overview/browser-action-with-popup.png)

Đây là Browser Action. Bao gồm : - Icon nằm **cạnh** thanh URL - Popup hiện ra khi click vào

## Page Action
![Page Action](https://developer.chrome.com/static/images/overview/page-action.png)

Bao gồm: - Icon nằm **trong** thanh URL - Popup hiện ra khi click vào

## Panel
![Panel](http://i.stack.imgur.com/Yo8VK.png)

Bao gồm tất cả những gì thuộc về **Inspect Element**

## Content Script
Script là những đoạn js được chèn vào trực tiếp trang web đang chạy.

![Content Script](https://developer.chrome.com/static/images/overview/arch-3.gif) Content

# Các kỹ thuật cần nắm
## Message Passing
> [Xem Thêm](https://developer.chrome.com/extensions/messaging) : là kỹ thuật giao tiếp giữa các _Module_ extension với nhau. Ví dụ: Giao tiếp giữa Page Action và Content Script

# To-Do list
- Thực hiện chức năng truyền 1 số dữ liệu giữa các module Extension.
- Lấy hết tất cả các file js.
- Nhiệm vụ đem đi phân tích XSS. [Xem thêm](https://code.google.com/p/domxsswiki/wiki/FindingDOMXSS)
- Phân tích phiên bản js của 1 số Library chuẩn. Ví dụ: _jquery_

# Implement
Chúng ta có hai hướng để phát triễn extension này:

> Hướng 1: Dùng Message Passing của Extension để điều khiển content script.

![Cách 1](http://i.imgur.com/REcdb8j.jpg)

> Hướng 2: Dùng Server trung gian để điều khiển content script.

![Cách 2](http://i.imgur.com/7YS0e8E.jpg)

# Chrome API
> Thảm khảo thêm [**ở đây**](https://developer.chrome.com/extensions/api_index)

Các API cần chú ý nhiều:

## chrome.tabs
> ABC

## chrome.extension
> Có thể sử dụng cho hầu hết các _module_ trong extension.

## chrome.devtools.panel
> ABC

## chrome.runtime
> ABC

## chrome.events
> ABC
