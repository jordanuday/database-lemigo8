const express = require("express");
const axios = require("axios");
const app = express();

const database = {
  transactions: [
    {
      id: 1,
      title: "Fjallraven  Foldsack No 1 Backpack Fits 15 Laptops",
      price: 329.85,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop up to 15 inches in the padded sleeve your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      sold: false,
      dateOfSale: "2021-11-27T20:29:54+05:30",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit TShirts ",
      price: 44.6,
      description:
        "Slimfitting style contrast raglan long sleeve threebutton henley placket light weight  soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a threebutton placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      sold: false,
      dateOfSale: "2021-10-27T20:29:54+05:30",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 615.89,
      description:
        "great outerwear jackets for SpringAutumnWinter suitable for many occasions such as working hiking camping mountainrock climbing cycling traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      sold: true,
      dateOfSale: "2022-07-27T20:29:54+05:30",
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 31.98,
      description:
        "The color could be slightly different between on the screen and in practice.  Please note that body builds vary by person therefore detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      sold: false,
      dateOfSale: "2021-10-27T20:29:54+05:30",
    },
    {
      id: 5,
      title:
        "John Hardy Womens Legends Naga Gold  Silver Dragon Station Chain Bracelet",
      price: 6950,
      description:
        "From our Legends Collection the Naga was inspired by the mythical water dragon that protects the oceans pearl. Wear facing inward to be bestowed with love and abundance or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      sold: false,
      dateOfSale: "2022-06-27T20:29:54+05:30",
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      sold: true,
      dateOfSale: "2021-09-27T20:29:54+05:30",
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 99.9,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement Wedding Anniversary Valentines Day...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      sold: true,
      dateOfSale: "2022-06-27T20:29:54+05:30",
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 32.97,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      sold: false,
      dateOfSale: "2021-11-27T20:29:54+05:30",
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive  USB 30 ",
      price: 704,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity Compatibility Formatted NTFS for Windows 10 Windows 8.1 Windows 7 Reformatting may be required for other operating systems Compatibility may vary depending on users hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      sold: true,
      dateOfSale: "2022-07-27T20:29:54+05:30",
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD  SATA III 6 Gbs",
      price: 763,
      description:
        "Easy upgrade for faster boot up shutdown application load and response As compared to 5400 RPM SATA 2.5 hard drive Based on published specifications and internal benchmarking tests using PCMark vantage scores Boosts burst write performance making it ideal for typical PC workloads The perfect balance of performance and reliability Readwrite speeds of up to 535MBs450MBs Based on internal testing Performance may vary depending upon drive capacity host device OS and application.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      sold: false,
      dateOfSale: "2022-03-27T20:29:54+05:30",
    },
    {
      id: 11,
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 25",
      price: 109,
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultraslim notebooks. Supports TRIM command Garbage Collection technology RAID and ECC Error Checking  Correction to provide the optimized performance and enhanced reliability.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      sold: false,
      dateOfSale: "2021-09-27T20:29:54+05:30",
    },
    {
      id: 12,
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 798,
      description:
        "Expand your PS4 gaming experience Play anywhere Fast and easy setup Sleek design with high capacity 3year manufacturers limited warranty",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      sold: true,
      dateOfSale: "2022-03-27T20:29:54+05:30",
    },
    {
      id: 13,
      title: "Acer SB220Q bi 215 inches Full HD 1920 x 1080 IPS UltraThin",
      price: 4792,
      description:
        "21. 5 inches Full HD 1920 x 1080 widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate 75Hz  Using HDMI port Zeroframe design  ultrathin  4ms response time  IPS panel Aspect ratio  16 9. Color Supported  16. 7 million colors. Brightness  250 nit Tilt angle 5 degree to 15 degree. Horizontal viewing angle178 degree. Vertical viewing angle178 degree 75 hertz",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      sold: false,
      dateOfSale: "2022-04-27T20:29:54+05:30",
    },
    {
      id: 14,
      title:
        "Samsung 49Inch CHG90 144Hz Curved Gaming Monitor LC49HG90DMNXZA  Super Ultrawide Screen QLED ",
      price: 4999.95,
      description:
        "49 INCH SUPER ULTRAWIDE 329 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT QLED TECHNOLOGY HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur ghosting and reduce input lag",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      sold: true,
      dateOfSale: "2022-01-27T20:29:54+05:30",
    },
    {
      id: 15,
      title: "BIYLACLESEN Womens 3in1 Snowboard Jacket Winter Coats",
      price: 284.95,
      description:
        "NoteThe Jackets is US standard size Please choose size as your usual wear Material 100 Polyester Detachable Liner Fabric Warm Fleece. Detachable Functional Liner Skin Friendly Lightweigt and Warm.Stand Collar Liner jacket keep you warm in cold weather. Zippered Pockets 2 Zippered Hand Pockets 2 Zippered Pockets on Chest enough to keep cards or keysand 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and waterfor a comfortable fit. 3 in 1 Detachable Design provide more convenience you can separate the coat and inner as needed or wear it together. It is suitable for different season and help you adapt to different climates",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      sold: true,
      dateOfSale: "2022-01-27T20:29:54+05:30",
    },
    {
      id: 16,
      title:
        "Lock and Love Womens Removable Hooded Faux Leather Moto Biker Jacket",
      price: 59.9,
      description:
        "100 POLYURETHANEshell 100 POLYESTERlining 75 POLYESTER 25 COTTON SWEATER Faux leather material for style and comfort  2 pockets of front 2ForOne Hooded denim style faux leather jacket Button detail on waist  Detail stitching at sides HAND WASH ONLY  DO NOT BLEACH  LINE DRY  DO NOT IRON",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      sold: false,
      dateOfSale: "2021-10-27T20:29:54+05:30",
    },
    {
      id: 17,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      price: 359.91,
      description:
        "Lightweight perfet for trip or casual wearLong sleeve with hooded adjustable drawstring waist design. Button and zipper front closure raincoat fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things it covers the hips and the hood is generous but doesnt overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      sold: false,
      dateOfSale: "2022-05-27T20:29:54+05:30",
    },
    {
      id: 18,
      title: "MBJ Womens Solid Short Sleeve Boat Neck V ",
      price: 29.549999999999997,
      description:
        "95 RAYON 5 SPANDEX Made in USA or Imported Do Not Bleach Lightweight fabric with great stretch for comfort Ribbed on sleeves and neckline  Double stitching on bottom hem",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      sold: true,
      dateOfSale: "2021-11-27T20:29:54+05:30",
    },
    {
      id: 19,
      title: "Opna Womens Short Sleeve Moisture",
      price: 39.75,
      description:
        "100 Polyester Machine wash 100 cationic polyester interlock Machine Wash  Pre Shrunk for a Great Fit Lightweight roomy and highly breathable with moisture wicking fabric which helps to keep moisture away Soft Lightweight Fabric with comfortable Vneck collar and a slimmer fit delivers a sleek more feminine silhouette and Added Comfort",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      sold: false,
      dateOfSale: "2022-01-27T20:29:54+05:30",
    },
    {
      id: 20,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 77.94,
      description:
        "95Cotton5Spandex Features Casual Short Sleeve Letter PrintVNeckFashion Tees The fabric is soft and has some stretch. Occasion CasualOfficeBeachSchoolHomeStreet. Season SpringSummerAutumnWinter.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      sold: false,
      dateOfSale: "2022-02-27T20:29:54+05:30",
    },
    {
      id: 21,
      title: "Fjallraven  Foldsack No 1 Backpack Fits 15 Laptops",
      price: 439.8,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop up to 15 inches in the padded sleeve your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      sold: true,
      dateOfSale: "2021-12-27T20:29:54+05:30",
    },
    {
      id: 22,
      title: "Mens Casual Premium Slim Fit TShirts ",
      price: 111.5,
      description:
        "Slimfitting style contrast raglan long sleeve threebutton henley placket light weight  soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a threebutton placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      sold: false,
      dateOfSale: "2022-01-27T20:29:54+05:30",
    },
    {
      id: 23,
      title: "Mens Cotton Jacket",
      price: 559.9,
      description:
        "great outerwear jackets for SpringAutumnWinter suitable for many occasions such as working hiking camping mountainrock climbing cycling traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      sold: false,
      dateOfSale: "2022-06-27T20:29:54+05:30",
    },
    {
      id: 24,
      title: "Mens Casual Slim Fit",
      price: 31.98,
      description:
        "The color could be slightly different between on the screen and in practice.  Please note that body builds vary by person therefore detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      sold: true,
      dateOfSale: "2021-10-27T20:29:54+05:30",
    },
    {
      id: 25,
      title:
        "John Hardy Womens Legends Naga Gold  Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection the Naga was inspired by the mythical water dragon that protects the oceans pearl. Wear facing inward to be bestowed with love and abundance or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      sold: false,
      dateOfSale: "2021-09-27T20:29:54+05:30",
    },
    {
      id: 26,
      title: "Solid Gold Petite Micropave ",
      price: 504,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      sold: false,
      dateOfSale: "2021-11-27T20:29:54+05:30",
    },
    {
      id: 27,
      title: "White Gold Plated Princess",
      price: 79.92,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement Wedding Anniversary Valentines Day...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      sold: true,
      dateOfSale: "2022-04-27T20:29:54+05:30",
    },
    {
      id: 28,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 131.88,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      sold: true,
      dateOfSale: "2022-08-27T20:29:54+05:30",
    },
    {
      id: 29,
      title: "WD 2TB Elements Portable External Hard Drive  USB 30 ",
      price: 640,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity Compatibility Formatted NTFS for Windows 10 Windows 8.1 Windows 7 Reformatting may be required for other operating systems Compatibility may vary depending on users hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      sold: false,
      dateOfSale: "2022-06-27T20:29:54+05:30",
    },
    {
      id: 30,
      title: "SanDisk SSD PLUS 1TB Internal SSD  SATA III 6 Gbs",
      price: 218,
      description:
        "Easy upgrade for faster boot up shutdown application load and response As compared to 5400 RPM SATA 2.5 hard drive Based on published specifications and internal benchmarking tests using PCMark vantage scores Boosts burst write performance making it ideal for typical PC workloads The perfect balance of performance and reliability Readwrite speeds of up to 535MBs450MBs Based on internal testing Performance may vary depending upon drive capacity host device OS and application.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      sold: true,
      dateOfSale: "2021-10-27T20:29:54+05:30",
    },
    {
      id: 31,
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 25",
      price: 545,
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultraslim notebooks. Supports TRIM command Garbage Collection technology RAID and ECC Error Checking  Correction to provide the optimized performance and enhanced reliability.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      sold: false,
      dateOfSale: "2022-01-27T20:29:54+05:30",
    },
    {
      id: 32,
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 1026,
      description:
        "Expand your PS4 gaming experience Play anywhere Fast and easy setup Sleek design with high capacity 3year manufacturers limited warranty",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      sold: false,
      dateOfSale: "2022-05-27T20:29:54+05:30",
    },
    {
      id: 33,
      title: "Acer SB220Q bi 215 inches Full HD 1920 x 1080 IPS UltraThin",
      price: 1198,
      description:
        "21. 5 inches Full HD 1920 x 1080 widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate 75Hz  Using HDMI port Zeroframe design  ultrathin  4ms response time  IPS panel Aspect ratio  16 9. Color Supported  16. 7 million colors. Brightness  250 nit Tilt angle 5 degree to 15 degree. Horizontal viewing angle178 degree. Vertical viewing angle178 degree 75 hertz",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      sold: true,
      dateOfSale: "2021-10-27T20:29:54+05:30",
    },
    {
      id: 34,
      title:
        "Samsung 49Inch CHG90 144Hz Curved Gaming Monitor LC49HG90DMNXZA  Super Ultrawide Screen QLED ",
      price: 999.99,
      description:
        "49 INCH SUPER ULTRAWIDE 329 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT QLED TECHNOLOGY HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur ghosting and reduce input lag",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      sold: false,
      dateOfSale: "2021-09-27T20:29:54+05:30",
    },
    {
      id: 35,
      title: "BIYLACLESEN Womens 3in1 Snowboard Jacket Winter Coats",
      price: 569.9,
      description:
        "NoteThe Jackets is US standard size Please choose size as your usual wear Material 100 Polyester Detachable Liner Fabric Warm Fleece. Detachable Functional Liner Skin Friendly Lightweigt and Warm.Stand Collar Liner jacket keep you warm in cold weather. Zippered Pockets 2 Zippered Hand Pockets 2 Zippered Pockets on Chest enough to keep cards or keysand 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and waterfor a comfortable fit. 3 in 1 Detachable Design provide more convenience you can separate the coat and inner as needed or wear it together. It is suitable for different season and help you adapt to different climates",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      sold: true,
      dateOfSale: "2022-06-27T20:29:54+05:30",
    },
    {
      id: 36,
      title:
        "Lock and Love Womens Removable Hooded Faux Leather Moto Biker Jacket",
      price: 269.55,
      description:
        "100 POLYURETHANEshell 100 POLYESTERlining 75 POLYESTER 25 COTTON SWEATER Faux leather material for style and comfort  2 pockets of front 2ForOne Hooded denim style faux leather jacket Button detail on waist  Detail stitching at sides HAND WASH ONLY  DO NOT BLEACH  LINE DRY  DO NOT IRON",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      sold: true,
      dateOfSale: "2022-05-27T20:29:54+05:30",
    },
    {
      id: 37,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      price: 279.93,
      description:
        "Lightweight perfet for trip or casual wearLong sleeve with hooded adjustable drawstring waist design. Button and zipper front closure raincoat fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things it covers the hips and the hood is generous but doesnt overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      sold: false,
      dateOfSale: "2022-03-27T20:29:54+05:30",
    },
    {
      id: 38,
      title: "MBJ Womens Solid Short Sleeve Boat Neck V ",
      price: 29.549999999999997,
      description:
        "95 RAYON 5 SPANDEX Made in USA or Imported Do Not Bleach Lightweight fabric with great stretch for comfort Ribbed on sleeves and neckline  Double stitching on bottom hem",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      sold: false,
      dateOfSale: "2021-11-27T20:29:54+05:30",
    },
    {
      id: 39,
      title: "Opna Womens Short Sleeve Moisture",
      price: 79.5,
      description:
        "100 Polyester Machine wash 100 cationic polyester interlock Machine Wash  Pre Shrunk for a Great Fit Lightweight roomy and highly breathable with moisture wicking fabric which helps to keep moisture away Soft Lightweight Fabric with comfortable Vneck collar and a slimmer fit delivers a sleek more feminine silhouette and Added Comfort",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      sold: true,
      dateOfSale: "2022-06-27T20:29:54+05:30",
    },
    {
      id: 40,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 129.9,
      description:
        "95Cotton5Spandex Features Casual Short Sleeve Letter PrintVNeckFashion Tees The fabric is soft and has some stretch. Occasion CasualOfficeBeachSchoolHomeStreet. Season SpringSummerAutumnWinter.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      sold: false,
      dateOfSale: "2022-06-27T20:29:54+05:30",
    },
    {
      id: 41,
      title: "Fjallraven  Foldsack No 1 Backpack Fits 15 Laptops",
      price: 549.75,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop up to 15 inches in the padded sleeve your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      sold: false,
      dateOfSale: "2022-01-27T20:29:54+05:30",
    },
    {
      id: 42,
      title: "Mens Casual Premium Slim Fit TShirts ",
      price: 89.2,
      description:
        "Slimfitting style contrast raglan long sleeve threebutton henley placket light weight  soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a threebutton placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      sold: true,
      dateOfSale: "2021-12-27T20:29:54+05:30",
    },
    {
      id: 43,
      title: "Mens Cotton Jacket",
      price: 503.91,
      description:
        "great outerwear jackets for SpringAutumnWinter suitable for many occasions such as working hiking camping mountainrock climbing cycling traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      sold: false,
      dateOfSale: "2022-05-27T20:29:54+05:30",
    },
    {
      id: 44,
      title: "Mens Casual Slim Fit",
      price: 63.96,
      description:
        "The color could be slightly different between on the screen and in practice.  Please note that body builds vary by person therefore detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      sold: false,
      dateOfSale: "2021-12-27T20:29:54+05:30",
    },
    {
      id: 45,
      title:
        "John Hardy Womens Legends Naga Gold  Silver Dragon Station Chain Bracelet",
      price: 6950,
      description:
        "From our Legends Collection the Naga was inspired by the mythical water dragon that protects the oceans pearl. Wear facing inward to be bestowed with love and abundance or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      sold: true,
      dateOfSale: "2022-06-27T20:29:54+05:30",
    },
    {
      id: 46,
      title: "Solid Gold Petite Micropave ",
      price: 1512,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      sold: false,
      dateOfSale: "2022-05-27T20:29:54+05:30",
    },
    {
      id: 47,
      title: "White Gold Plated Princess",
      price: 109.89,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement Wedding Anniversary Valentines Day...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      sold: false,
      dateOfSale: "2022-07-27T20:29:54+05:30",
    },
    {
      id: 48,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 87.92,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      sold: true,
      dateOfSale: "2022-04-27T20:29:54+05:30",
    },
    {
      id: 49,
      title: "WD 2TB Elements Portable External Hard Drive  USB 30 ",
      price: 768,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity Compatibility Formatted NTFS for Windows 10 Windows 8.1 Windows 7 Reformatting may be required for other operating systems Compatibility may vary depending on users hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      sold: true,
      dateOfSale: "2022-08-27T20:29:54+05:30",
    },
    {
      id: 50,
      title: "SanDisk SSD PLUS 1TB Internal SSD  SATA III 6 Gbs",
      price: 1090,
      description:
        "Easy upgrade for faster boot up shutdown application load and response As compared to 5400 RPM SATA 2.5 hard drive Based on published specifications and internal benchmarking tests using PCMark vantage scores Boosts burst write performance making it ideal for typical PC workloads The perfect balance of performance and reliability Readwrite speeds of up to 535MBs450MBs Based on internal testing Performance may vary depending upon drive capacity host device OS and application.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      sold: false,
      dateOfSale: "2022-06-27T20:29:54+05:30",
    },
    {
      id: 51,
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 25",
      price: 981,
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultraslim notebooks. Supports TRIM command Garbage Collection technology RAID and ECC Error Checking  Correction to provide the optimized performance and enhanced reliability.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      sold: true,
      dateOfSale: "2022-05-27T20:29:54+05:30",
    },
    {
      id: 52,
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 1254,
      description:
        "Expand your PS4 gaming experience Play anywhere Fast and easy setup Sleek design with high capacity 3year manufacturers limited warranty",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      sold: false,
      dateOfSale: "2022-07-27T20:29:54+05:30",
    },
    {
      id: 53,
      title: "Acer SB220Q bi 215 inches Full HD 1920 x 1080 IPS UltraThin",
      price: 6589,
      description:
        "21. 5 inches Full HD 1920 x 1080 widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate 75Hz  Using HDMI port Zeroframe design  ultrathin  4ms response time  IPS panel Aspect ratio  16 9. Color Supported  16. 7 million colors. Brightness  250 nit Tilt angle 5 degree to 15 degree. Horizontal viewing angle178 degree. Vertical viewing angle178 degree 75 hertz",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      sold: false,
      dateOfSale: "2022-07-27T20:29:54+05:30",
    },
    {
      id: 54,
      title:
        "Samsung 49Inch CHG90 144Hz Curved Gaming Monitor LC49HG90DMNXZA  Super Ultrawide Screen QLED ",
      price: 999.99,
      description:
        "49 INCH SUPER ULTRAWIDE 329 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT QLED TECHNOLOGY HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur ghosting and reduce input lag",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      sold: true,
      dateOfSale: "2021-09-27T20:29:54+05:30",
    },
    {
      id: 55,
      title: "BIYLACLESEN Womens 3in1 Snowboard Jacket Winter Coats",
      price: 626.89,
      description:
        "NoteThe Jackets is US standard size Please choose size as your usual wear Material 100 Polyester Detachable Liner Fabric Warm Fleece. Detachable Functional Liner Skin Friendly Lightweigt and Warm.Stand Collar Liner jacket keep you warm in cold weather. Zippered Pockets 2 Zippered Hand Pockets 2 Zippered Pockets on Chest enough to keep cards or keysand 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and waterfor a comfortable fit. 3 in 1 Detachable Design provide more convenience you can separate the coat and inner as needed or wear it together. It is suitable for different season and help you adapt to different climates",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      sold: false,
      dateOfSale: "2022-07-27T20:29:54+05:30",
    },
    {
      id: 56,
      title:
        "Lock and Love Womens Removable Hooded Faux Leather Moto Biker Jacket",
      price: 179.7,
      description:
        "100 POLYURETHANEshell 100 POLYESTERlining 75 POLYESTER 25 COTTON SWEATER Faux leather material for style and comfort  2 pockets of front 2ForOne Hooded denim style faux leather jacket Button detail on waist  Detail stitching at sides HAND WASH ONLY  DO NOT BLEACH  LINE DRY  DO NOT IRON",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      sold: true,
      dateOfSale: "2022-02-27T20:29:54+05:30",
    },
    {
      id: 57,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      price: 339.99,
      description:
        "Lightweight perfet for trip or casual wearLong sleeve with hooded adjustable drawstring waist design. Button and zipper front closure raincoat fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things it covers the hips and the hood is generous but doesnt overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      sold: true,
      dateOfSale: "2021-09-27T20:29:54+05:30",
    },
    {
      id: 58,
      title: "MBJ Womens Solid Short Sleeve Boat Neck V ",
      price: 59.099999999999994,
      description:
        "95 RAYON 5 SPANDEX Made in USA or Imported Do Not Bleach Lightweight fabric with great stretch for comfort Ribbed on sleeves and neckline  Double stitching on bottom hem",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      sold: false,
      dateOfSale: "2022-02-27T20:29:54+05:30",
    },
    {
      id: 59,
      title: "Opna Womens Short Sleeve Moisture",
      price: 79.5,
      description:
        "100 Polyester Machine wash 100 cationic polyester interlock Machine Wash  Pre Shrunk for a Great Fit Lightweight roomy and highly breathable with moisture wicking fabric which helps to keep moisture away Soft Lightweight Fabric with comfortable Vneck collar and a slimmer fit delivers a sleek more feminine silhouette and Added Comfort",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      sold: false,
      dateOfSale: "2022-06-27T20:29:54+05:30",
    },
    {
      id: 60,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 412.99,
      description:
        "95Cotton5Spandex Features Casual Short Sleeve Letter PrintVNeckFashion Tees The fabric is soft and has some stretch. Occasion CasualOfficeBeachSchoolHomeStreet. Season SpringSummerAutumnWinter.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      sold: true,
      dateOfSale: "2021-09-27T20:29:54+05:30",
    },
  ],
};

// API endpoint to initialize the database with seed data
app.get("/initializeDatabase", async (req, res) => {
  try {
    const response = await axios.get(
      "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
    );
    // Process the response and initialize the database with the fetched data
    // Your implementation to initialize the database goes here

    res.status(200).json({ message: "Database initialized with seed data." });
  } catch (error) {
    res.status(500).json({ error: "Failed to initialize database." });
  }
});

// API endpoint for statistics of the selected month
app.get("/statistics/:month", (req, res) => {
  const selectedMonth = req.params.month;
  const getQuery = `SELECT 
    SUM(saleAmount) AS totalSaleAmount,
    COUNT(CASE WHEN isSold = 1 THEN 1 END) AS totalSoldItems,
    COUNT(CASE WHEN isSold = 0 THEN 1 END) AS totalNotSoldItems
FROM 
    transactions
WHERE 
    strftime('%m', dateOfSale) = ?;`;
  // Replace `database.transactions` with the actual table/collection in your database.
  // In this example, we are using an in-memory database object.

  const data = database.transactions.filter((transaction) => {
    return transaction.dateOfSale.startsWith(selectedMonth);
  });

  const totalSaleAmount = data.reduce(
    (total, transaction) => total + transaction.saleAmount,
    0
  );
  const totalSoldItems = data.filter((transaction) => transaction.isSold === 1)
    .length;
  const totalNotSoldItems = data.filter(
    (transaction) => transaction.isSold === 0
  ).length;

  res.status(200).json({ totalSaleAmount, totalSoldItems, totalNotSoldItems });
});

// API endpoint for bar chart data of the selected month
app.get("/barChart/:month", (req, res) => {
  const selectedMonth = req.params.month;
  const getQuery = `SELECT 
    CASE 
        WHEN price BETWEEN 0 AND 100 THEN '0 - 100'
        WHEN price BETWEEN 101 AND 200 THEN '101 - 200'
        WHEN price BETWEEN 201 AND 300 THEN '201 - 300'
        WHEN price BETWEEN 301 AND 400 THEN '301 - 400'
        WHEN price BETWEEN 401 AND 500 THEN '401 - 500'
        WHEN price BETWEEN 501 AND 600 THEN '501 - 600'
        WHEN price BETWEEN 601 AND 700 THEN '601 - 700'
        WHEN price BETWEEN 701 AND 800 THEN '701 - 800'
        WHEN price BETWEEN 801 AND 900 THEN '801 - 900'
        ELSE '901-above'
    END AS priceRange,
    COUNT(*) AS itemCount
FROM 
    transactions
WHERE 
    strftime('%m', dateOfSale) = ? 
GROUP BY 
    priceRange;`;

  // Replace `database.transactions` with the actual table/collection in your database.
  // In this example, we are using an in-memory database object.

  const data = database.transactions.filter((transaction) => {
    return transaction.dateOfSale.startsWith(selectedMonth);
  });

  const barChartData = data.reduce((chartData, transaction) => {
    const priceRange = getPriceRange(transaction.price);
    chartData[priceRange] = (chartData[priceRange] || 0) + 1;
    return chartData;
  }, {});

  res.status(200).json({ barChartData });
});

// Helper function to determine the price range
function getPriceRange(price) {
  if (price >= 0 && price <= 100) {
    return "0 - 100";
  } else if (price >= 101 && price <= 200) {
    return "101 - 200";
  } else if (price >= 201 && price <= 300) {
    return "201 - 300";
  } else if (price >= 301 && price <= 400) {
    return "301 - 400";
  } else if (price >= 401 && price <= 500) {
    return "401 - 500";
  } else if (price >= 501 && price <= 600) {
    return "501 - 600";
  } else if (price >= 601 && price <= 700) {
    return "601 - 700";
  } else if (price >= 701 && price <= 800) {
    return "701 - 800";
  } else if (price >= 801 && price <= 900) {
    return "801 - 900";
  } else {
    return "901-above";
  }
}

// API endpoint for pie chart data of the selected month
app.get("/pieChart/:month", (req, res) => {
  const selectedMonth = req.params.month;
  const getQuery = `SELECT 
    category,
    COUNT(*) AS itemCount
FROM 
    transactions
WHERE 
    strftime('%m', dateOfSale) = ? 
GROUP BY 
    category;`;

  // Replace `database.transactions` with the actual table/collection in your database.
  // In this example, we are using an in-memory database object.

  const data = database.transactions.filter((transaction) => {
    return transaction.dateOfSale.startsWith(selectedMonth);
  });

  const pieChartData = data.reduce((chartData, transaction) => {
    const { category, itemCount } = transaction;
    chartData[category] = (chartData[category] || 0) + itemCount;
    return chartData;
  }, {});

  res.status(200).json({ pieChartData });
});

// API endpoint to fetch data from all the above APIs and combine the responses
app.get("/combinedData/:month", async (req, res) => {
  const selectedMonth = req.params.month;

  try {
    // Fetch data from statistics API
    const statisticsResponse = await axios.get(
      `http://localhost:3000/statistics/${selectedMonth}`
    );

    // Fetch data from bar chart API
    const barChartResponse = await axios.get(
      `http://localhost:3000/barChart/${selectedMonth}`
    );

    // Fetch data from pie chart API
    const pieChartResponse = await axios.get(
      `http://localhost:3000/pieChart/${selectedMonth}`
    );

    // Combine responses and send the final combined JSON
    const combinedResponse = {
      statistics: statisticsResponse.data,
      barChart: barChartResponse.data,
      pieChart: pieChartResponse.data,
    };

    res.status(200).json(combinedResponse);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch combined data." });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
