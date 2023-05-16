# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

# Examples:

#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)




def create_product_entries(name, price, delivery_cost, mode, image_url, website_url, website_name)
  ecommerce_website = EcommerceWebsite.find_or_create_by(name: website_name.capitalize)
  product = Product.create(
    name: name,
    price: price,
    delivery_cost: delivery_cost,
    mode: mode,
    image_url: image_url,
    website_url: website_url,
    ecommerce_website: ecommerce_website,
    website_name: website_name
  )
  # Rating.create(
  #   product: product,
  #   ecommerce_website: ecommerce_website,
  #   rating: rand(1..5)
  # )
end

create_product_entries("Samsung Galaxy S21", 269.99, 50.00, "Fast Shipping", "https://m.media-amazon.com/images/I/61jYjeuNUnL.__AC_SX300_SY300_QL70_FMwebp_.jpg", "https://www.amazon.com/Samsung-Galaxy-S21-5G-Version/dp/B08VLMQ3KS/ref=sr_1_2?crid=U39RSMTSMJP6&keywords=samsung+galaxy+s21&qid=1682071708&sprefix=samsung+galaxy+s21%2Caps%2C347&sr=8-2", "amazon")
create_product_entries("Samsung Galaxy S21", 360.99, 50.00, "Fast Shipping", "https://s.alicdn.com/@sc04/kf/H8ffaafcbc30f4439b5ec8f7f346fb9a1i.jpg_300x300.jpg", "https://www.alibaba.com/trade/search?tab=all&searchText=samsung+galaxy+s21", "alibaba")
create_product_entries("Samsung Galaxy S21", 234.99, 50.00, "Fast Shipping", "https://i.ebayimg.com/images/g/UaQAAOSwwEVjVtkE/s-l500.jpg", "https://www.ebay.com/itm/255798953595?epid=28043687665&hash=item3b8ece467b:g:I1AAAOSwPhljW9x~&amdata=enc%3AAQAIAAAA4GgTB4H%2FZK6MMdgpkLg1mViaGC7J6MM1utmNO%2BYPKtNWcVWfYSTkiaqsOfeDj6faWqdFxtGzzH8G8l0T7vPQNb3nA4roNAOmxQPRshnb3FVrICdyLvJW77xrJBLGcLN4i6thrKYR%2FfWXHONk2TiUMMKzL0FWmGRhyQWIYptzGAEyBKlOSOgznPrdMooGxWES2jVnkLLxedJ1hE8qtv340zBL3rupIoXC1ALpEB2nrxah4phrGRI8%2BIo5ZvK2id210oVrQ07x6KNS%2BIp4FH95rJmUiN5N1y0suoPx2o2q8tNZ%7Ctkp%3ABFBMxveYtvRh&var=555735987575", "ebay")



create_product_entries("iPhone 13 pro", 139.00, 40.00, "Fast Shipping", "https://m.media-amazon.com/images/I/61sDyXAepuL._AC_SX679_.jpg", "https://www.amazon.com/iPhone-13-Pro-512GB-Gold/dp/B0BGYBBZ9R/ref=sr_1_1_sspa?crid=HSZAP9G5OS7I&keywords=iphone+13+pro&qid=1682345791&sprefix=iphone+13+pro%2Caps%2C358&sr=8-1-spons&psc=1&smid=AESX3141EPI7X&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzUkJCWTlDM01UWEUmZW5jcnlwdGVkSWQ9QTAzOTg1MjUzMk1NM0k3QU5URUUyJmVuY3J5cHRlZEFkSWQ9QTAxMzE3NzMzNVJGVDVTNVpYR0YwJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==", "amazon")
create_product_entries("iPhone 13 pro",  "Out of stock", "","","", "", "alibaba")
create_product_entries("iPhone 13 pro", 94.99, 50.00, "Fast Shipping", "https://i.ebayimg.com/thumbs/images/g/KwsAAOSwFOliejc2/s-l300.webp", "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=iphone+13+pro&_sacat=0&LH_TitleDesc=0&_odkw=iphone+14+pro&_osacat=0", "ebay")



create_product_entries("iPhone 14 pro", 169.99, 50.00, "Fast Shipping", "https://m.media-amazon.com/images/I/51uD1lmrV8L._AC_UY218_.jpg", "https://www.amazon.com/s?k=iphone+14+pro&crid=2JTFUBIXC9942&sprefix=iphone+14+pro%2Caps%2C546&ref=nb_sb_noss_1", "amazon")
create_product_entries("iPhone 14 pro", 155.99, 80.00, "Fast Shipping", "https://i.ebayimg.com/thumbs/images/g/FmUAAOSwKUFjYtg7/s-l300.webp", "https://www.alibaba.com/product-detail/Used-Mobile-Phones-14-Pro-unlock_1600636261799.html?spm=a2700.galleryofferlist.normal_offer.d_image.7cbd3a2czS19lu", "alibaba")
create_product_entries("iPhone 14 pro", 152.99, 150.00, "Fast Shipping", "https://i.ebayimg.com/thumbs/images/g/FmUAAOSwKUFjYtg7/s-l300.webp", "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2047675.m570.l1313&_nkw=iphone+14+pro&_sacat=0", "ebay")



create_product_entries("Samsung QLED tv", 560.99, 30.00, "Fast Shipping", "https://s.alicdn.com/@sc04/kf/Ha4e6641661ac4bb88f4416813c4d014eA.jpg_300x300.jpg", "https://www.amazon.com/s?k=samsung+qled&crid=1P2SH32041AYF&sprefix=samsung+qle%2Caps%2C573&ref=nb_sb_ss_ts-doa-p_2_11", "amazon")
create_product_entries("Samsung QLED tv", 497.99, 80.00, "Fast Shipping", "https://m.media-amazon.com/images/I/71bmtncxa+L._AC_UY218_.jpg", "https://www.alibaba.com/trade/search?tab=all&searchText=samsung+Qled+tv", "alibaba")
create_product_entries("Samsung QLED tv", 495.99, 100.00, "Fast Shipping", "https://i.ebayimg.com/thumbs/images/g/Y88AAOSwuWpjYT9G/s-l300.webp", "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=samsung+qled&_sacat=0&LH_TitleDesc=0&_odkw=iphone+14+pro&_osacat=0", "ebay")

create_product_entries("LG OLED TV", 269.99, 60.00, "Fast Shipping", "https://m.media-amazon.com/images/I/91zoO1AAfBS._AC_UY218_.jpg", "https://www.amazon.com/s?k=LG+OLED&crid=QNU0S8F0UJBO&sprefix=lg+oled%2Caps%2C520&ref=nb_sb_noss_1", "amazon")
create_product_entries("LG OLED TV", 500.99, 30.00, "Fast Shipping", "https://s.alicdn.com/@sc04/kf/Hade73df54cf94eb98321065fc04b2519H.jpg_300x300.jpg", "https://www.alibaba.com/trade/search?tab=all&searchText=lg+oled", "alibaba")
create_product_entries("LG OLED TV", 947.99, 70.00, "Fast Shipping", "https://i.ebayimg.com/thumbs/images/g/NiwAAOSwSLZihO2W/s-l300.webp", "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=LG+OLED+TV&_sacat=0&LH_TitleDesc=0&_odkw=samsung+qled&_osacat=0", "ebay")




create_product_entries("Macbook air", 399.99, 60.00, "Fast Shipping", "https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY218_.jpg", "https://www.amazon.com/s?k=macbook+air&crid=1AFPH667H92JX&sprefix=macbook%2Caps%2C401&ref=nb_sb_ss_ts-doa-p_2_7", "amazon")
create_product_entries("Macbook air", 220.99, 40.00, "Fast Shipping", "https://s.alicdn.com/@sc04/kf/Hbd73563ca3174f178379c2d068acae0cG.jpg_300x300.jpg", "https://www.alibaba.com/product-detail/Unlocked-Used-Laptop-For-2020-13_1600251017576.html?spm=a2700.galleryofferlist.normal_offer.d_image.c5ca4a6ck7E1o0", "alibaba")
create_product_entries("Macbook air", 179.99, 50.00, "Fast Shipping", "https://i.ebayimg.com/thumbs/images/g/sbYAAOSwPGlj~ZMF/s-l300.webp", "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=macbook+air&_sacat=0", "ebay")


create_product_entries("hp Elitebook", 355.99, 30.00, "Fast Shipping", "https://m.media-amazon.com/images/I/81JaA+TabBL._AC_UL320_.jpg", "https://www.amazon.com/s?k=hp+elitebook&crid=2P4L8NFSB0FBL&sprefix=hp+elitebook%2Caps%2C322&ref=nb_sb_noss_2", "amazon")
create_product_entries("hp Elitebook", 199.99, 10.00, "Fast Shipping", "https://s.alicdn.com/@sc04/kf/H2b49388230124c0fb505f0588efe60b4M.jpg_300x300.jpg", "https://www.alibaba.com/trade/search?IndexArea=product_en&CatId=&fsb=y&viewtype=&tab=all&SearchScene=&SearchText=hp+elitebook", "alibaba")
create_product_entries("hp Elitebook", 189.99, 40.00, "Fast Shipping", "https://i.ebayimg.com/thumbs/images/g/xmQAAOSwv81kIh3K/s-l300.webp", "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=hp+elite+book&_sacat=0&LH_TitleDesc=0&_odkw=macbook+air&_osacat=0", "ebay")


create_product_entries("iPad pro", 793.99, 70.00, "Fast Shipping", "https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_UY218_.jpg", "https://www.amazon.com/s?k=ipad+pro&crid=19LNOKAYR6Z8Y&sprefix=ipad%2Caps%2C559&ref=nb_sb_ss_ts-doa-p_3_4", "amazon")
create_product_entries("iPad pro", 389.99, 60.00, "Fast Shipping", "https://s.alicdn.com/@sc04/kf/Hb0b31e9a9156458eb80a1c1fbd975c4c1.jpg_300x300.jpg", "https://www.alibaba.com/trade/search?spm=a2700.galleryofferlist.0.0.55a73956xA3Z5y&SearchScene=themePage&themeScene=cloudTheme&themeIds=feed&sceneId=leaderBoard&SearchText=ipad+pro&themeId=&themeName=leaderBoard", "alibaba")
create_product_entries("iPad pro", 779.99, 50.00, "Fast Shipping", "https://i.ebayimg.com/thumbs/images/g/k2kAAOSw~u5iAPWP/s-l300.webp", "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=ipad+pro&_sacat=0&LH_TitleDesc=0&_odkw=hp+elite+book&_osacat=0", "ebay")


create_product_entries("jbl flip 6", 99.99, 80.00, "Fast Shipping", "https://m.media-amazon.com/images/I/61Z05Wv903L._AC_UY218_.jpg", "https://www.amazon.com/s?k=jbl+flip6&crid=2ACHZG2JG23FE&sprefix=jbl+flip6%2Caps%2C472&ref=nb_sb_noss_1", "amazon")
create_product_entries("jbl flip 6", 110.99, 50.00, "Fast Shipping", "https://s.alicdn.com/@sc04/kf/Aab2db5e84f6f485cbc2ac1fcb5a7d809O.jpg_300x300.jpg", "https://www.alibaba.com/trade/search?IndexArea=product_en&CatId=&fsb=y&viewtype=&tab=all&SearchScene=&SearchText=jbl+flip+6", "alibaba")
create_product_entries("jbl flip 6", 79.99, 90.00, "Fast Shipping", "https://i.ebayimg.com/thumbs/images/g/zrUAAOSwl01kGhns/s-l300.webp", "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=jbl+flip6&_sacat=0&LH_TitleDesc=0&_odkw=ipad+pro&_osacat=0", "ebay")


create_product_entries("Nikon D3500", 719.99, 40.00, "Fast Shipping", "https://m.media-amazon.com/images/I/61s8FKpmqML._AC_UY218_.jpg", "https://www.amazon.com/s?k=nikon+camera&crid=MLOOMRS38GO6&sprefix=nikon+cam%2Caps%2C428&ref=nb_sb_ss_ts-doa-p_2_9", "amazon")
create_product_entries("Nikon D3500", 450.99, 20.00, "Fast Shipping", "https://s.alicdn.com/@sc04/kf/H4b2c1b40f1374024a89a17ed233216c2v.jpg_300x300.jpg", "https://www.alibaba.com/trade/search?tab=all&searchText=Nikon+D3500+camra", "alibaba")
create_product_entries("Nikon D3500", 535.99, 70.00, "Fast Shipping", "https://i.ebayimg.com/thumbs/images/g/qu4AAOSwbLRj6UAH/s-l300.webp", "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=NIKON+D3500&_sacat=0&LH_TitleDesc=0&_odkw=jbl+flip6&_osacat=0", "ebay")




#name, price, delivery_cost, mode, image_url, website_url, website_name

create_product_entries("Samsung galaxy S22", 1179.99, 23.96, "Fast Shipping", "https://m.media-amazon.com/images/I/71nZ4-uixuL._AC_UY218_.jpg", "https://www.amazon.com/SAMSUNG-Factory-Unlocked-Android-Smartphone/dp/B0BLP2G96N/ref=sr_1_1_sspa?adgrpid=81802849376&hvadid=585479825687&hvdev=c&hvlocphy=1009824&hvnetw=g&hvqmt=b&hvrand=5514389159096599823&hvtargid=kwd-1597497397573&hydadcr=29139_14573970&keywords=samsung%2Bs22%2Bultra%2Bphone&qid=1682415109&sr=8-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFPTFEzME5UTDVTTEImZW5jcnlwdGVkSWQ9QTAwMTM1OTExTDYwVDc2MDdORTVZJmVuY3J5cHRlZEFkSWQ9QTA1NDI4MjcxVVZLQjg3NzlUR0pXJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1", "amazon")
create_product_entries("Samsung galaxy S22", 162.40, 55.00, "Fast Shipping", "https://s.alicdn.com/@sc04/kf/Hacf91d717244489398b72696e1eeb8e9f.jpg_300x300.jpg", "https://www.alibaba.com/product-detail/2023-Brand-new-High-Quality-Smartphone_1600750444364.html", "alibaba")
create_product_entries("Samsung galaxy S22", 589.00, 25.28, "Fast Shipping", "https://i.ebayimg.com/thumbs/images/g/rZUAAOSwZcBjo3a-/s-l225.webp", "https://www.ebay.com/itm/255890067629?epid=27052277424&hash=item3b943c90ad:g:rZUAAOSwZcBjo3a-&amdata=enc%3AAQAIAAAA4Dd1y62Rz5tJ3pcAtLqdYZi4LT8OsP0ap%2BwiTbnHPQ5Gqqw%2FRpy9Daj7KcHp%2BYlLTAivMyuWNQuZF%2Bjb3qiGZY1yycLTbUNRt1qDXza%2FJ1vFGs5xcjL4sE7U4UedijBNj%2FkGxV4xj%2F3YhLqEzcWs%2FpFoLEtw5ec5EehR7fkVgK1AGNAAKlx1GcaLT6LObm9bww0sTFnK%2FdVO%2BUevICJFucBzsjjmJml%2FAsgJM5aVRL%2B7RuSnaelZ7SELb%2BQRCh7t%2F%2FJKVJ9nP%2FvWvD5kPdYqnlc4a1E1%2BtK7%2FVSkoO9m7Mxg%7Ctkp%3ABFBMiKmm-_Zh", "ebay")
create_product_entries("Samsung galaxy A33", 309.50, 22.58, "Fast Shipping", "https://m.media-amazon.com/images/I/41iyn1vntLL._AC_UY218_.jpg", "https://www.amazon.com/Samsung-SM-A336M-Factory-Unlocked-International/dp/B09Y9H8PNG/ref=sr_1_2?crid=ICLQPNW7UQEG&keywords=Samsung%2Bgalaxy%2BA33&qid=1682415726&sprefix=samsung%2Bgalaxy%2Ba33%2Caps%2C809&sr=8-2&th=1", "amazon")
create_product_entries("Samsung galaxy A33", 300.00, 20.00, "Fast Shipping", "https://s.alicdn.com/@sc04/kf/H5edf577bf3264f4d912da3c9c98525a08.jpg_300x300.jpg", "https://www.alibaba.com/product-detail/2023-buy-2-get-1-free_1600750750118.html", "alibaba")
create_product_entries("Samsung galaxy A33", 204.99, 28.73, "Fast Shipping", "https://i.ebayimg.com/images/g/1P4AAOSwerJiX7RG/s-l500.jpg", "https://www.ebay.com/itm/284898095978?epid=16054190216&hash=item42553ff36a:g:XE0AAOSwSkpiX7Py&amdata=enc%3AAQAIAAAAwApiyfVKly5TXdqj6Agx6a72MUV4tkcRUhFYAnxiO55F0Lhe5olVsYiDd0hgDuISZMHJ1QJ%2FdfHPFXyquygVvQmq6maOqJlIdCJZlzEbwwiKrf3p4eE1F1llbAPpJhsQQSRh0p2R3lyE%2FnQaNLlIL%2Fyh3CBLE2J0VjF6qyfApZhYTgJXl2yAlzXkfWoaPtmISkRY%2F9D2wvYqmkm%2BxFgcl37KWBUs%2FETX2EIO6XN8YMAV4nLGaTamFkYkqbDf6mi6hw%3D%3D%7Ctkp%3ABk9SR-7n7fz2YQ&var=586663930694", "ebay")
create_product_entries("Samsung galaxy A73", 395.00, 22.97 , "Fast Shipping", "https://m.media-amazon.com/images/I/81Eqrz2tKKL._AC_UY218_.jpg", "https://www.amazon.com/Samsung-Galaxy-A736B-Factory-Unlocked/dp/B09WDHGYPF/ref=sr_1_3?crid=LPIM5OSFY48Z&keywords=Samsung+galaxy+A75&qid=1682416304&sprefix=samsung+galaxy+a75%2Caps%2C971&sr=8-3", "amazon")
create_product_entries("Samsung galaxy A73", 365.00, 70.00, "Fast Shipping", "https://s.alicdn.com/@sc04/kf/A5f679af3ed7a4f4b8289c1e1779a6060q.jpg_300x300.jpg", "https://www.alibaba.com/product-detail/Wholesale-Best-Selling-Item-Galaxy-A73_10000010457076.html?spm=a2700.galleryofferlist.normal_offer.d_title.141b4794NA8Pga", "alibaba")
create_product_entries("Samsung galaxy A73", 498.00, 75.00, "Fast Shipping", "https://i.ebayimg.com/thumbs/images/g/vqIAAOSwH~xiecN-/s-l225.webp", "https://www.ebay.com/itm/374067430289?hash=item5718280391:g:vqIAAOSwH~xiecN-&amdata=enc%3AAQAIAAAA8OMKw2bIwIeodm3ypY4FxgLyvxEWbFPx1SbVXgFarn8BGuIWgCjR9wm0WvVbsKh%2FnJdXh8C78P6mcfFGxq7fkiEn8RbdKZzbvKr3rFqHjIlfB4xy8aB4gEfrI01mYzqoE9AjdDapXNZzHPvbl%2F%2FByDv1lO11LisWxI9sA6slxuzseu2y05PFyWQWDJB1OU2u6iSnksFIcKXcjGhil6DKx7sAUqWz7AsATaGV29dKbXqNgXfIBq%2FOwpend6IWghjJG7EX38P4gwSvYbdt8AIZoOcsCherFEJfug%2B3zeyIPq1IKh%2FKXBJu7QxF1luKoHCSTA%3D%3D%7Ctkp%3ABFBMwNa-_fZh", "ebay")

create_product_entries("hp Chromebook", 179.99, 20.00, "Fast Shipping", "https://m.media-amazon.com/images/I/71tXLOE7wIL._AC_UL640_QL65_.jpg", "https://www.amazon.com/dp/B09SVSBVP1?pd_rd_i=B09SVSBVP1&pf_rd_p=b000e0a0-9e93-480f-bf78-a83c8136dfcb&pf_rd_r=0WBPW0FQ34X3X90RPZ02&pd_rd_wg=Xwhbs&pd_rd_w=8HuD1&pd_rd_r=40536054-347c-4d2f-861a-05a39de635ac&th=1", "amazon")
create_product_entries("hp Chromebook", 155.99, 70.00, "Fast Shipping", "https://s.alicdn.com/@sc04/kf/H781f8f65e0d34e9291b93164832bd0879.jpg_220x220.jpg", "https://www.alibaba.com/product-detail/2021-cheap-laptop-14-inch-super_1600355743799.html?spm=a2700.galleryofferlist.0.0.384f6360BJRQHm", "alibaba")
create_product_entries("hp Chromebook", 35.99, 40.00, "Fast Shipping", "https://i.ebayimg.com/thumbs/images/g/k2wAAOSwbmpiIYKl/s-l225.webp", "https://www.ebay.com/itm/195689368052?hash=item2d8ffec9f4:g:k2wAAOSwbmpiIYKl&amdata=enc%3AAQAIAAAA4F8Ip0Aqic4gyMr2oQ0KMEEjIMJ9c8hSMHkbO0LR4x2QGHhymuWBnLFDmBEGO8xz%2BhWiD0d1yMRMY30uotU%2FV9K8QK3W00TUABXH9WZ3kwzaevH5xf6w2eZgIILs1ZKR4ZC7kJIvDAtmG4eOKbqnUWV%2B82wSQ7TwQtzI9h3PyPSbUgzoXklekKyHHrii9H87zXKnwuCuHmsGsoFzPrqrijC4ETsCh8pxXPP%2BeJerHv%2B1QUcpVsPwbKkVYlOqPRhB7dySKL8COD8f3vSEKlQNh7PgSoug84AMtly4pRt14Pdt%7Ctkp%3ABFBM9tf5_vZh", "ebay")
create_product_entries("hp Elitebook", 208.99, 40.00, "Fast Shipping", "https://m.media-amazon.com/images/I/41KSel04RsL._AC_UY218_.jpg", "https://www.amazon.com/EliteBook-Ultrabook-Graphics-Windows-Professional/dp/B01EH0NR1W/ref=sr_1_1?crid=2UZ7PBS7WLIWV&keywords=hp+elitebook&qid=1682418827&s=books&sprefix=hp+elitebook%2Cstripbooks-intl-ship%2C391&sr=1-1", "amazon")
create_product_entries("hp Elitebook", 300.99, 20.00, "Fast Shipping", "https://s.alicdn.com/@sc04/kf/Hf350d1ef442f4de18a76046ed8f91915o.jpg_300x300.jpg", "https://www.alibaba.com/product-detail/For-Hp-Elitebook-820-G3-Laptop_1600764505192.html?spm=a2700.galleryofferlist.normal_offer.d_image.35151f2dvAKSbi", "alibaba")
create_product_entries("hp Elitebook", 209.99, 70.00, "Fast Shipping", "https://i.ebayimg.com/thumbs/images/g/UXoAAOSwtXJkP~ti/s-l225.webp", "https://www.ebay.com/itm/166040941900?hash=item26a8cfb54c:g:UXoAAOSwtXJkP~ti&amdata=enc%3AAQAIAAAA4LBrdKbfKRTiTJ6wfDYLqAbkmIvHNH1XmlAt6aqIdH7Pg3EzjBSHPQyEV4ua7t2oAp0Ffi7Q9wdzuiVxr6vFoezIq0XK1qM9XfjtzYB5Rd7P%2FC1CigjrjuRXHAGtqY77ujvo429orgGJLH2t7RmYnQLY6lJEH1Sbx0Lbqxx7TrV%2F002edUCaymAaz2rzDvfwUY0ijsPTcTP5yjcOo854Dng91q55XjVfByNpbd4TAdWmPy5m3dOFrBXJ%2BcjnqP%2BPckjzSu%2BlDoKCmJdNvqfV3Y6jwOeO5JsdIINGcXlSZTK2%7Ctkp%3ABFBMjqzO__Zh", "ebay")
create_product_entries("hp Premium Envy", 369.99, 20.00, "Fast Shipping", "https://m.media-amazon.com/images/I/71QvTg+BX5L._AC_SR405,405_.jpg", "https://www.amazon.com/HP-Premium-Dual-Core-Processor-Bluetooth/dp/B0B2F6HG7Q?pd_rd_w=wpMQ8&content-id=amzn1.sym.c9b3a448-7c3c-4399-ac60-2bdc98844f72&pf_rd_p=c9b3a448-7c3c-4399-ac60-2bdc98844f72&pf_rd_r=PSEM5ZDAKWDMPD5JS6JD&pd_rd_wg=nD5HD&pd_rd_r=47f17b9a-a6dc-426d-a72b-87208d0de170&ref_=sspa_dk_rhf_detail_pt_sub_3&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE2MFRPUVVZT0JETVkmZW5jcnlwdGVkSWQ9QTAxNDA5MTQzMzlHWEwwQ0NSUVhHJmVuY3J5cHRlZEFkSWQ9QTA4ODQ4MTMySjJYNEhGUDdFWFNTJndpZGdldE5hbWU9c3BfcmhmX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1", "amazon")
create_product_entries("hp  Envy", 560.99, 70.00, "Fast Shipping", "https://s.alicdn.com/@sc04/kf/H5e221f01b671434ab1a9feb5ff733beay.jpg_300x300.jpg", "https://www.alibaba.com/product-detail/Wholesale-for-HP-Envy-X360-15_1600581042907.html?spm=a2700.galleryofferlist.normal_offer.d_image.57c87f02kCZGZh", "alibaba")
create_product_entries("hp Envy", 851.99, 40.00, "Fast Shipping", "https://i.ebayimg.com/thumbs/images/g/tLcAAOSwhnxjlU5C/s-l225.webp", "https://www.ebay.com/itm/325458411854?hash=item4bc6d5414e:g:tLcAAOSwhnxjlU5C&amdata=enc%3AAQAIAAAA4DYGLLao18nzzMJhQwWJ6i4Ql2FwvlKwiH1wdWN7CEZ9BRX8cY7jwIb31M7IK6e5CtETWPZX3W0wkRplSrRNT%2B%2Bi9perqE3wSOLQI8QJ2pBcp9n4bP1kIlJrjGVaDtkAIwBQ6%2BIzGQKpWm1xrAulRUrDmfjrvaNVuYhGaDhGTH9QRauHilowpwoskKjJBX5eeA6GG%2Btk1i%2B84M%2Fezs1rxSzprq0PlQaSnB3jNMJZRcT2jAKZss6lhj7m6owhRO3XGFZTqQ4F2vuLzb7bJBDf1KzkQWbnm3DwZXuWYJuz75CH%7Ctkp%3ABFBMnsj8__Zh", "ebay")

create_product_entries("iPhone 12 pro", 479.99, 25.14, "Fast Shipping", "https://m.media-amazon.com/images/I/71Id9mpENBL._AC_UY218_.jpg", "https://www.amazon.com/Apple-iPhone-12-64GB-Blue/dp/B09JFTPQY1/ref=sr_1_2?keywords=iphone+12&sr=8-2" ,"amazon")
create_product_entries("iPhone 12 pro", 150.00, 50.00, "Fast Shipping", "https://s.alicdn.com/@sc04/kf/H73ca7b3e996b4d738248d1c02164f87dZ.jpg_300x300.jpg", "https://www.alibaba.com/product-detail/original-iphone-12-pro-max-fairly_1600693309716.html?spm=a2700.galleryofferlist.normal_offer.d_title.177041e4kc0QtU", "alibaba")
create_product_entries("iPhone 12 pro", 440.00, 32.25, "Fast Shipping", "https://i.ebayimg.com/thumbs/images/g/yHoAAOSwHz1j898n/s-l225.webp", "https://www.ebay.com/itm/155419502879?epid=6044131879&hash=item242fb9691f:g:yHoAAOSwHz1j898n&amdata=enc%3AAQAIAAAA4EF52xYc8a%2F9WnLHE6XgJjDyYjXQbB6nkmZQojVN8i%2FzHKGq20kEjGf8x9PIVK0DE3K385ej8PDqIf6qPfs0WF1ltSuZ4Rkr8HDIo60f2uJqA9yzr3gtnkq%2BAqpue4kl9AGmcWQDK%2BnNO%2Ft9xlzN8BwBXfx3yzTHokUmOjUf3s%2Fvlu4g7JC2%2BAuwpgdDKlsgGpAQGr42NKS5KpGrMEvDQMPSVQi5HSkrXrvb0VpYW3YrOkTM0w7cPTXISNoLNnKCsJdZJf2Y0VYrHgvy7uxy7OmmFG0Tqtu%2FsWlqv4PF1N1I%7Ctkp%3ABFBM5omogPdh&var=455620984265", "eBay")
create_product_entries("iPhone 11", 379.00, 30.01, "Fast Shipping", "https://m.media-amazon.com/images/I/41C-k1iuJNS._AC_UY218_.jpg", "https://www.amazon.com/Apple-iPhone-11-64GB-White/dp/B08BHKSZ5P/ref=sr_1_2?keywords=iphone%2B11&sr=8-2&th=1", "amazon")
create_product_entries("iPhone 11", 190.00, 60.00, "Fast Shipping", "https://s.alicdn.com/@sc04/kf/Hd708f7924a0945039a19c4786fbaa52f6.jpg_300x300.jpg", "https://www.alibaba.com/product-detail/Best-For-Iphone-Used-Mobile-Phones_1600724991481.html?spm=a2700.galleryofferlist.normal_offer.d_title.292d61c2EP9Wd2", "alibaba")
create_product_entries("iPhone 11", 259.56, 29.55, "Fast Shipping", "https://i.ebayimg.com/thumbs/images/g/GXYAAOSwhiNj3NAz/s-l225.webp", "https://www.ebay.com/itm/275680318331?epid=17035818063&hash=item402fd3d37b:g:GXYAAOSwhiNj3NAz&amdata=enc%3AAQAIAAAA4HWVWnM7JMHvR35hx53Bi5IqntKEMvwWks73siCVfXObhftaRdzvXCcLOr8tyKGXAvIkWcpAU3AGIQmj3XXwYoVCwNkkS3AJ8rOZonVR3iKxjLOoE7L7L8cl2R%2FLRNHau5Y0JaykwSaSfi5%2FxvYclNoIXV3Zyv0Kr5KcSVzqTcB7cNBIDTrcIWHhokSVzzBED2b9XLf4DEIVSYR8kiLul6N6UbktJubTMxP%2FQbBTkqUoHIEI6K4%2FdhaLbzNNMxqR6Zf5IV4hp6amKwmY5KEISfQ2mXe6JFectUhsR6L0J4pT%7Ctkp%3ABFBM2qeYgvdh", "eBay")
create_product_entries("iPhone X", 228.99, 35.00, "Fast Shipping", "https://m.media-amazon.com/images/I/717KHGCJ6eL._AC_UY218_.jpg", "https://www.amazon.com/Apple-iPhone-XR-Fully-Unlocked/dp/B07P6Y7954/ref=sr_1_2?keywords=iphone+x&sr=8-2", "amazon")
create_product_entries("iPhone X", 100.00, 70.00, "Fast Shipping", "https://s.alicdn.com/@sc04/kf/H558688f5961f43119cdb5a0b2bff56b0X.jpg_300x300.jpg", "https://www.alibaba.com/product-detail/wholesale-used-iphones-brand-new-second_1600761859188.html?spm=a2700.galleryofferlist.normal_offer.d_title.13d665c4wXH3jr", "alibaba")
create_product_entries("iPhone X", 234.99, 29.18, "Fast Shipping", "https://i.ebayimg.com/thumbs/images/g/LAwAAOSw3tFhEnDR/s-l225.webp", "https://www.ebay.com/itm/174911437767?epid=19024178513&hash=item28b988bbc7:g:LAwAAOSw3tFhEnDR&amdata=enc%3AAQAIAAAA4GdhwzfFg6qWjJ%2FbiZj9Kl0ZS9YPxtpeyZQBOxcglXgTAEJ2M278WwhZCi4kIp4VXpJYpJRdP%2BlZar6EhZh1%2ByX7gBL9p3KrbWm6zMlkmpWfVjs19DYgVvHZYqPHfvd%2FHqVwYBlk7kPtT7rxfhL6VrVffqygnHuBG7E9anFb4gGiZas2Z7tI9NzkKarCCROniNvK5d4IOwEMb9TBBuQTvPQR%2Fqg9ZmQWNrGgRW8OJs2eHf45R81zx7OPFgkzX9xKRmm7n9uZ2KEwAVCCAgiBjHm%2FO3IcX%2Fs643VZhpZuAZQs%7Ctkp%3ABFBMrv2ugvdh&var=474063318106", "eBay")