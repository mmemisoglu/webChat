# Nodejs & Socket-io 
## [TR]
## Nodejs ile Chat Uygulaması
Nodejs ile web tabanlı mesajlaşma uygulaması geliştirdim. Uygulamanın hedefi basit seviyede Broadcast mesajlaşma ortamı sağlanması. Uygulama sürecinde Socket.io kütüphanesi kullanımıştır. Socket.io, gerçek zamanlı iletişim ve etkileşimli web uygulamaları geliştirmek için kullanılan bir JavaScript kütüphanesidir. Bu kütüphane, sunucu ve istemciler arasında sürekli ve anlık veri iletişimi sağlar, böylece canlı sohbet uygulamaları, oyunlar ve gerçek zamanlı güncellemeler gerektiren diğer projeleri kolayca oluşturmanıza olanak tanır. Socket.io, farklı tarayıcılar ve platformlar arasında sorunsuz çalışma yeteneği ile geniş bir kullanıcı kitlesi tarafından tercih edilir.

Uygulamanın arayüz fotoğrafları "UI.png" adlı klasör içerisinde mevcuttur. 

## Uygulama içeriği 
* Gerçek zamanlı Broadcast mesaj atabilme.
* Gerçek zamanlı mesaj yazıyor bilgilendirmesi.
* Mesaj yollayan kişiye benzersiz ID tanımlanması.

##  Gelecekte gelecek özellikler
* Mesajın gönderildiği zaman bilgisi.
* Mesaj geçmişinin görüntülenmesi.
* Kullanıcı girişi ile mesaj ekranına erişim.
* Peer-to-peer meesajlaşma özelliği.

## Kullanımı
Birden fazla tarayıcıda aynı port üzerinden localhost açılması gerekmektedir. Açılan tarayıcılar üzerinden gönderici ismi belirterek mesaj gönderme işlemini gerçekleştirebilirsiniz.

Yukarıda bulunan kodları çalıştırabilmek için bilgisayarınızda node, express ve socket.io kurulu olmak zorundadır. 

# Node.js & Socket.io
## [EN]
## Chat Application with Node.js
I have developed a web-based messaging application with Node.js. The aim of the application is to provide a basic level of broadcast messaging environment. The Socket.io library has been used throughout the application. Socket.io is a JavaScript library used for developing real-time communication and interactive web applications. This library enables continuous and instant data communication between the server and clients, making it easy to create live chat applications, games, and other projects that require real-time updates. Socket.io is preferred by a wide range of users due to its seamless compatibility across different browsers and platforms.

The interface screenshots of the application are available in the folder named "UI.png."

## Application Contents
* Real-time broadcasting of messages.
* Real-time typing indicator.
* Assignment of a unique ID to the sender.
## Future Features
* Message timestamp information.
* Viewing message history.
* Access to the message screen with user login.
* Peer-to-peer messaging feature.
## Usage
Multiple browsers must be opened on the same port via localhost to use the application. You can send messages by specifying the sender's name in the opened browsers.

To run the above code, you must have Node.js, Express, and Socket.io installed on your computer.


