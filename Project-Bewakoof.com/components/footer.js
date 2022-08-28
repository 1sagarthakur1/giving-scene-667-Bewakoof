let footer = () => {
    return`
    <div id="upper_first_div">
    
        <img id="iconn_image" src="data:image/png;base64,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" alt="">
    
        
    
        <div id="under_small_div">
    
            <div id="smaller_div">
            <h3>CUSTOMER SERVICE</h3>
            <p>Contact Us</p>
            <p>Track Order</p>
            <p>Return Order</p>
            <p>Cancel Order</p>
        </div>
    
    
        <div id="smaller_div">
            <h3>COMPANY</h3>
            <p>About Us</p>
            <p>We're Hiring</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Blog</p>
        </div>
    
    
        <div id="smaller_div">
            <h3>CONNECT WITH US</h3>
            <P>4.7M People Like This</P>
            <p>1M Followers</p>
        </div>
    
    
        <div id="smaller_div">
            <h3>KEEP UP TO DATE</h3>
            <button id="subscribe_button">SUBSCRIBE</button>
        </div>
    
        </div>
    
    
    
    
        <div id="upper_niche">
            <div id="niche_divso">
                <h3></h3>
                <p id="stretch">15 Days return policy</p>
                <p id="stretch">Cash on delivery*</p>
            </div>
            <div id="niche_divsoo">
                <h3>DOWNLOAD THE APP</h3>
                <br>
                <div>
                    <img id="google" src="https://images.bewakoof.com/web/app_android_v1.png" alt="">
                    <img id="apple" src="https://images.bewakoof.com/web/app_ios_v1.png" alt="">
                </div>
            </div>
            <div id="niche_divs">
                <h3>100% SECURE PAYMENT</h3>
                <img id="payment" src="https://images.bewakoof.com/web/secure-payments-image.png" alt="">
            </div>
    
    
    
        </div>
        <hr>
    
        <div id="downside">
            <div id="down">
                <ul>
                    <h4 id="under"> MEN'S CLOTHING</h4>
                        <p>Top Wear</p>
                        <p>Men's New Arrivals</p>
                        <p>MensHalf Sleeves T-Shirts </p>
                        <p>Mens Hoodies and SweatShirts</p>
                        <p>Mwns Long Sleve T-Shirts</p>
                        <p>Mens Printed T-Shirts</p>
                        <p>Mens Plain T-Shirts</p>
                        <p>Mens Vests</p>
                        <p>Mens Polo T-Shirts</p>
                        <p>Mens Kurtas</p>
                        <p>Mens Combo T-Shirts</p>
                        <p>Mens Shirts</p>
                        <p>Mens Nightwear</p>
                        <p>Mens Plus Size Store</p>
                        <br>
                        <p>Bottom Wear</p>
                        <p>Mens Pajamas</p>
                        <p>Mens Box Shorts</p>
                        <p>Mens Shorts</p>
                        <p>mens Track Pants</p>
                        <p>Mens Pants</p>
                        <br>
                        <p>Featured</p>
                        <p>Mens Flip Flop</p>
                        <p>Mens Sliders</p>
                        <p>Marvel T-Shirts</p>
                        <p>disney T-Shirts</p>
                        <p>avengers T-Shirts</p>
                        <p>Star Wars T-Shirts</p>
                        <p>Batman T-Shirts</p>
                        <p>Superman T-Shirts</p>
                        <p>Joker T-Shirts</p>
    
                   
                </ul>
            </div>
            <div id="down">
                <ul>
                    <h4 id="under">WOMENS CLOTHING</h4>
                    <p>Womens Top Wear</p>
                    <p>Womens New Arrival</p>
                    <p>Womens T-Shirts</p>
                    <p>Womens Hoodies and Sweatshirts</p>
                    <p>Womens Dresses</p>
                    <p>Womens 3/4 Sleeve T-Shirts</p>
                    <p>Womens Kurtis</p>
                    <p>Womens Combo T-Shirts</p>
                    <p>Womens Nightwears</p>
                    <p>Womens Plus ize Stores</p>
                    <br>
                    <p>Womens Bottom Wear</p>
                    <p>Womens Pajamas</p>
                    <p>Womens Boxer Shorts</p>
                    <p>Womens Jeans</p>
                    <p>Womens Joggers</p>
                    <p>Womens Shorts</p>
    
                    <br>
                    <p>BAGS</p>
                    <p>Laptop Bags</p>
                    <p>Small BAckpacks</p>
                    <br>
                    <p>Featured</p>
                    <p>Womens Slides</p>
                    <p>Womens FLip Flops</p>
    
               
            </ul>
            </div>
            <div id="down">
    
                <ul>
                    <h4 id="under">MOBILE COVERS</h4>
                    <P>Brands</P>
                    <p>Apple</p>
                    <p>Realme</p>
                    <p>Samsung</p>
                    <p>Xiaomi</p>
                    <p>Oneplus</p>
                    <p>Vivo</p>
                    <p>Oppo</p>
                </ul>
            </div>
            <div id="down">
    
                <ul>
                    <h2>fanbook</h2>
                    <h2>offers</h2>
                    <h2>sitemap</h2>
                </ul>
            </div>
        </div>
    
        <!-- ***************************** -->
    
        
    </div>
    
    <div id="lower_footer">
        <div id="lower_under">
    
        <h4 id="lower_h4">BEWAKOOF THE NEW AGE ONLINE SHOPPING EXPERIENCE.
        </h4>
        <p id="lower_p">Founded in 2012, Bewakoof is a lifestyle fashion brand that makes creative, distinctive fashion for the trendy, contemporary Indian. Bewakoof was created on the principle of creating impact through innovation, honesty and thoughtfulness.
    
        </p>
        <p id="lower_p">With a team of 400 members, and 2mn products sold till date. We like to experiment freely, which allows us to balance creativity and relatability, and our innovative designs. Our range of products is always fresh and up-to-date, and we clock sales of over 1 lakh products a month. Our innovation focus extends to our operations as well. We are vertically integrated, manufacture our own products, and cut out the middleman wherever possible. This direct-to-consumer model allows us to create high-quality fashion at affordable prices. A thoughtful brand, we actively attempt to minimize our environmental footprint and maximize our social impact. These efforts are integrated right into our day-to-day operations, from rainwater harvesting to paper packaging to employee benefits. To create an accessible, affordable and thoughtful experience of online shopping in India.
    
        </p>
            <h4 id="lower_h4" >ONLINE SHOPPING AT BEWAKOOF IS HASSLE-FREE, CONVENIENT AND SUPER-EXCITING!</h4>
        <p id="lower_p">Online Shopping has always been a fun and exciting task for most and more so when the shopping mall is none other than your own house. We have all had days when we have planned trips to the clothing store in advance, dreaming about what we would buy once we get there. Now we wouldnt think twice before indulging in some online shopping. Well, cut to todays time and age, you can do all this from the comfort of your home while enjoying many online shopping offers, right from amazing deals and discounts to one of the most robust user interface amongst most online shopping sites in India, with many shopping filters to make your shopping experience truly hassle free. This in our own words is what we call Bewakoof.com.
    
        </p>
        <br><br>
        <p id="lower_p">Bewakoof, THE place to be when it comes to the coolest in online fashion, offers you fine, high-quality merchandise go ahead and indulge in a bit of online shopping for men and womens fashion. So browse through the exciting categories we have on offer from mens fashion to basic mens clothing as well as wide variety in womenswear and womens clothes to the amazing range of accessories, fill up your carts and get fast home delivery for all orders. All of this topped with our exclusive online shopping offers makes for an exciting, irresistible and uber cool combo! You can even gift some to your near and dear ones while being absolutely certain that it will put a smile on their faces.</p>
        
        <h4 id="lower_h4">BEWAKOOF.COM: THE QUIRKIEST ONLINE SHOPPING SITES OF ALL!
        </h4>
        <p id="lower_p">Online fashion is definitely more accessible with Bewakoof.com. Explore the latest collections in Marvel t-shirts including avengers t-shirts and captain America t-shirts in official merchandise. Apart from these, quirkiest of T-shirts that you wont find on any online shopping sites in India are showcased at Bewakoof.com. If your wardrobe has been longing for a cool overhaul then bewakoof.com will certainly be your best bet amongst all online shopping sites. Also, take a tour of our bewakoof blog to stay abreast with the latest runway trends and be a trendsetter among your immediate circles. What we wear speaks volumes of us they say. But what if what you wore actually spoke what your mood was! Havent we all wondered where we could get those quirky t-shirts and sport them with confidence? Sure otherwise getting them made or even buying them from otherwise expensive online shopping sites for clothes may cost you substantially but with Bewakoof.com, you will understand that you do not have to spend a fortune on online fas</p>
        <h4 id="lower_h4">AVAIL OF ONLINE SHOPPING BENEFITS AT BEWAKOOF.COM AND YOULL SHOP NOWHERE ELSE!
        </h4>
        <p id="lower_p">Choose your product, get it ordered online, and we ensure that its delivery happens right at your doorstep anywhere in India. You just need to take care of the payment for the product from the comfort of your home, while we ensure free shipping all the time on almost everything with no strings attached. For any second thoughts after purchase, we have in place a return policy as well. One of the best you will find on any online shopping sites in India. For your online shopping experience to be safe and risk-free, we offer Cash On Delivery (COD) facility too. So you dont have to worry anymore about your hard earned money being stuck when you buy clothes online at bewakoof.com. Avail exciting online shopping offers like designs of the day and colour of the month when you shop with us. Make sure to use our easy 15-day returns policy, card or cash on delivery option and other customer-friendly features. A comprehensive sizing guide and detailed product descriptions coupled with high-resolution product shots will give you all the information to make the right buying decision. Give your wardrobe the much-needed upgrade with uber cool clothing head to Bewakoof.com for a great online shopping india experience now! Could you have asked for more?</p>
    
        <h4 id="lower_h4">DONT MISS OUT ON ACCESSORIES AVAILABLE ON OUR MULTI-FACETED ONLINE STORE!
        </h4>
        <br><br>
        <p id="lower_p">We dont just offer you exciting options in online fashion but also give you amazing accessories with really cool bags and bag packs to choose from. Our bags and backpacks are compact, hassle-free and easy to stuff things in. And all of this with the swag that you get to carry along with it. Cool designs are what form a major part of our online fashion and we also ensure our accessories section doe</p>
        <p id="lower_p">As for our accessories collection, they are also manufactured with impeccable quality materials. Our mobile covers are made from hard and durable polycarbonate, with a matte finish that will make for a great protection for your phone with the rough use that we put them through nowadays.
    
        </p>
        <h4 id="lower_h4">DESIGN OF THE DAY- THE COOLEST FEATURE EVER!
        </h4>
        <p id="lower_p">Who said good and cool t-shirts have to expensive? We bring newer, cooler and more youth oriented designs everyday. Yes! Everyday you get a new design to explore and buy. Although all our t-shirts are at an extremely affordable price, we decided to slash them down even further. But there is a catch. It is only for those designs and these exclusive prices are only valid for for a duration of 24 hours! Designs refresh every day at 3pm and are valid only for 24 hours. So you need to hurry and grab one fast before it ends. Because we believe everyone needs to have a fair chance at all of our fresh designs of the day.
    
        </p>
    
        <h4  id="lower_h4">COLOR OF THE MONTH- 30 DAYS, 1 SHADE!
        </h4>
        <p id="lower_p">When was the last time you played the colour game that we all loved in our childhood? Well, we believe that we are always children at heart and for all the children within us, bewakoof.com runs colour of the month. Color of the month is a vibe that we feel every month. To communicate that to our consumers and creating the mood for it is our sole purpose. Our palette refreshes every month and every color has a story to tell.</p>
        <p id="lower_p">A fresh new concept for online fashion, for fresh new looks. Every month on the first, we choose a new colour and showcase all our products for that particular colour. Apparels, mostly solid colored plain t-shirts, are available at an exclusive discounted price every first of the month. There are options available in sleeve styles Boyfriend sleeves for women, full sleeve t-shirts for men and more. You can buy those throughout the month but the exclusive price will only be valid for that one day, the first of every month. Online shopping never seemed so fresh and exciting. So hurry up and stack your cart with your favourite colour before it goes out of stock!</p>
        <h4  id="lower_h4">BEWAKOOF.COM: THE UBER COOL ONLINE FASHION STORE FOR THE YOUTH
        </h4>
        <p id="lower_p">We, at Bewakoof.com, have all that you need to glam up your cool quotient. From an extensive range of plus size clothing, casual shirts for men and accessories for everyone, we purvey diversity of choices in online shopping india platform has to offer under one umbrella. The range of apparels like men t-shirts, joggers, sliders, Henley shirts, Polo t-shirts, Oxford pants and more provide an array of options for the online customer to create a ravishing ensemble from. We try to target all kinds of customers and cater to their needs and preferences. Communication is the key to our functioning. Your Bewakoof Online fashion Shop has arrived! Do not miss the attractive online shopping offers everyday. Work your fashion with the wide range of apparels available only one click away! Make a statement with our best t-shirts online! Get more, pay less!
    
        </p>
        <h4  id="lower_h4">OUR PHILOSOPHY
        </h4>
        <p id="lower_p">We believe in creating the kind of fashion, that makes you stand out as they are in line with the latest local and global trends of the industry, but also at the same time offer value for money functionality, with quality materials and comfortable and flattering prints. We try to look into the psyche of our customers, and try to get inspired by the conversations and experiences around us while creating our graphics, to ensure that they are relatable. We believe in constant and consistent innovation to ensure that our fans get nothing short of the bets at affordable rates! While most people do not know, we do not outsource the manufacturing of our products, everything from the conception of the designs to the manufacture and the styling that you see on the photographs of the banners and product pages of our website all happen in house! We go from yarn to product and since we 're vertically integrated and bring fashion from us directly to your doorstep without any middlemen that also further ensures reliability because for us it is not just about the money but about building the trust and credibility in our fans about our brand. We also make sure to decrease the impact on environment and are building initiatives that will help us with the same, for now by optimizing our processes to use only as much as we need from nature, rain water harvesting and recycling the water from our RO water facility, because we believe that the spirit of Bewakoof is about creating an impact by breaking conventions and having a different perspective!</p>
    
    
    
    
    
    </div>
    </div>
    
    
    
    
    
    `;
}
export default footer;