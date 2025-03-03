import React, { useState } from "react";
import Home from "../Components/Home";
import Model from "../Components/ModelViewer";
import Footer from "../Components/Footer";
const sections = [
    {
        title: "Unisex T-Shirts",
        products: [
            { id: 1, name: "Casual T-Shirt", price: "Starting ₹299", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_c4hHX14X7RQQXfbdKyWHkCrXwlMwK3ZJrw&s",modelSrc: "/Boy_Blue.glb" },
            { id: 2, name: "Graphic T-Shirt", price: "Starting ₹399", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7sSg2A0HdKgfOnjZZj5Fq1ILdYw-0tArizA&s",modelSrc: "/Girl_Yellow.glb" },
            { id: 3, name: "Polo T-Shirt", price: "Under ₹499", image: "https://classicpolos.com/cdn/shop/products/PRISTO-TRUEREDSFP_1.jpg?v=1735308360",modelSrc: "/Boy_Red.glb" },
            { id: 4, name: "Oversized T-Shirt", price: "Starting ₹599", image: "https://i.pinimg.com/736x/6c/06/1b/6c061b7a64e7d7b8e8a3c02fde8bcf9a.jpg",modelSrc: "/Boy_Yellow.glb" },
            { id: 5, name: "Round Neck T-Shirt", price: "Under ₹349", image: "https://assets.ajio.com/medias/sys_master/root/20240124/UAQu/65b12a8c16fd2c6e6abdd56e/-473Wx593H-467006125-red-MODEL.jpg",modelSrc: "/Girl_Red.glb" },
        ],
    },
    {
        title: "Unisex Shirts",
        products: [
            { id: 6, name: "Formal Shirt", price: "Starting ₹499", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-RRXXsUfWqp5XhcHwxJthMhof7M0e55omIw&s" },
            { id: 7, name: "Casual Shirt", price: "Starting ₹599", image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/22556456/2023/3/29/d158befb-e695-48b3-89a7-b792bbfb91a91680069418837MASCLNSASSAFRASMenBlackRelaxedFloralOpaquePrintedCasualShirt1.jpg" },
            { id: 8, name: "Linen Shirt", price: "Under ₹699", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7H4ALj4R922UMcFmOXQxC34g2Qr8ei4l3Ew&s" },
            { id: 9, name: "Checked Shirt", price: "Starting ₹799", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpeTHiZlBADHolH6kLVJT9V7UvJt6kRjYhDg&s" },
            { id: 10, name: "Denim Shirt", price: "Under ₹899", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9eVAjsvAAKB60ELLyLgcDqPfYXrjwUxS7jQ&s" },
        ],
    },
    {
        title: "Shoes",
        products: [
            { id: 11, name: "Running Shoes", price: "Under ₹999", image: "https://assets.ajio.com/medias/sys_master/root/20240516/dxrK/6645c59505ac7d77bb611ce6/-473Wx593H-466410362-grey-MODEL.jpg" },
            { id: 12, name: "Sneakers", price: "Under ₹899", image: "https://rukminim2.flixcart.com/image/850/1000/l5ld8y80/shoe/n/c/m/3-ld5507-3-layasa-pink-original-imagg8cnzg7r6y6m.jpeg?q=90&crop=false" },
            { id: 13, name: "Casual Shoes", price: "Starting ₹799", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoNxyewP33D-h9nBz9kLEJ9moeq6Fhk1qrlg&s" },
            { id: 14, name: "Formal Shoes", price: "Under ₹1199", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdAaIONiJk5P-JASiXy9XJmoFM0XZVcrGPBg&s" },
            { id: 15, name: "Loafers", price: "Starting ₹999", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNky0rBPCq5AYNdhwmU08O4RuMsN23SStHA&s" },
        ],
    },
    {
        title: "Pants & Trousers",
        products: [
            { id: 16, name: "Jeans", price: "Under ₹799", image: "https://m.media-amazon.com/images/I/81QDxg-SjuL._AC_UY1100_.jpg" },
            { id: 17, name: "Chinos", price: "Under ₹699", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5OkpIWZGaBVNM3eMr4RHj1lLOIfM86uQHHQ&s" },
            { id: 18, name: "Cargo Pants", price: "Starting ₹899", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9aw-JCr7umi6TfWnYtzQe1ANkyx1KYCZiA&s" },
            { id: 19, name: "Joggers", price: "Under ₹999", image: "https://www.snitch.co.in/cdn/shop/files/dea639b7fbd8e2627b44cd482c0ff5e0.jpg?v=1729087424" },
            { id: 20, name: "Formal Trousers", price: "Starting ₹1099", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT17wHuiAvpP1MhkLtQdXNs1mw9Ld8cGGl52g&s" },
        ],
    },
    {
        title: "Accessories",
        products: [
            { id: 21, name: "Sunglasses", price: "Starting ₹199", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGO_dvE4ORyw68uMft9ar3ZC2fAM0qUm5Tw&s" },
            { id: 22, name: "Watches", price: "Starting ₹499", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK9ePYr7gXTVgJfZ412HiunvsQj2ghqCj7IA&s" },
            { id: 23, name: "Belts", price: "Under ₹299", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGp9ze_Zg9izDDb5PbxBtx82ZpB8g0FWYmvA&s" },
            { id: 24, name: "Wallets", price: "Starting ₹399", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRHwBBYlyMe_-ufWV8on3-PlZ0YVmKZ1w7w&s" },
            { id: 25, name: "Caps & Hats", price: "Under ₹349", image: "https://m.media-amazon.com/images/I/61uh6gtJGQL._AC_UY1100_.jpg" },
        ],
    },
];

const ProductsPage = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState(null);
    const [showMore, setShowMore] = useState(false);
    const [messages, setMessages] = useState([
        { type: "bot", text: "Hello! How can I assist you today?" }
    ]);
    const [userInput, setUserInput] = useState("");

    const chatResponses = {
        hi: "Hello! How can I help you?",
        hello: "Hi there! Need any assistance?",
        "how are you": "I'm just a chatbot, but I'm here to help!",
        "what is your name": "I'm your friendly assistant bot!",
        "what are your delivery options": "We offer standard and express delivery options.",
        "do you have a return policy": "Yes, you can return products within 30 days.",
        "how can I track my order": "You will receive a tracking link via email after placing your order.",
        "do you provide international shipping": "Yes, we ship to most countries worldwide.",
        "are there any discounts for bulk orders": "Yes! Contact our support team for bulk pricing.",
        "what payment methods do you accept": "We accept credit/debit cards, PayPal, and other secure payment options.",
        "how long does delivery take": "Standard shipping takes 5-7 days, while express shipping takes 1-3 days.",
        "can I cancel my order": "Yes, you can cancel your order within 24 hours of purchase.",
        "do you offer gift wrapping": "Yes, we offer gift wrapping at an additional charge.",
        "what happens if my order is damaged": "Please contact our support team with photos of the damage, and we will assist you.",
        "do you have a physical store": "No, we are an online-only store.",
        "can I change my shipping address after ordering": "You can change your shipping address within a few hours of placing your order by contacting our support team.",
        "do you have a loyalty program": "Yes! Sign up for our loyalty program to earn points and discounts.",
        "how can I contact customer support": "You can contact us via email or live chat on our website.",
        "do you offer same-day delivery": "Same-day delivery is available in select locations. Check availability at checkout.",
        "is there a warranty on your products": "Yes, most of our products come with a 1-year warranty.",
        "do you sell gift cards": "Yes! We offer digital and physical gift cards.",
        "how do I create an account": "Click on 'Sign Up' on our website and follow the instructions.",
        "can I track my return status": "Yes, you will receive updates via email once your return is processed.",
        "do you restock sold-out items": "Yes, we restock popular items. Sign up for notifications to be alerted.",
        "how do I apply a discount code": "You can enter your discount code at checkout before making a payment.",
        "do you have an affiliate program": "Yes, you can apply for our affiliate program on our website.",
        "what is your refund policy": "Refunds are processed within 5-7 business days after receiving the returned item.",
        "how do I subscribe to your newsletter": "You can subscribe by entering your email at the bottom of our homepage.",
    };    

    const chatQuestions = [
        { id: 1, question: "What are your delivery options?", answer: "We offer standard and express delivery options." },
        { id: 2, question: "Do you have a return policy?", answer: "Yes, you can return products within 30 days." },
        { id: 3, question: "How can I track my order?", answer: "You will receive a tracking link via email after placing your order." },
        { id: 4, question: "Do you provide international shipping?", answer: "Yes, we ship to most countries worldwide." },
        { id: 5, question: "Are there any discounts for bulk orders?", answer: "Yes! Contact our support team for bulk pricing." },
        { id: 6, question: "Can I modify my order after placing it?", answer: "Orders can be modified within 24 hours of purchase." },
        { id: 7, question: "What payment methods do you accept?", answer: "We accept credit/debit cards, PayPal, and more." },
        { id: 8, question: "How can I contact customer support?", answer: "You can reach us via email or live chat on our website." },
    ];

    const handleCardClick = (product) => {
        setSelectedProduct(product);
    };

    const handleClose = () => {
        setSelectedProduct(null);
    };

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    const handleQuestionClick = (id) => {
        setActiveQuestion(activeQuestion === id ? null : id); // Toggle answer visibility
    };

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const handleUserMessage = () => {
        if (!userInput.trim()) return;

        const userMessage = userInput.toLowerCase();
        const botResponse = chatResponses[userMessage] || "Sorry, I didn't understand that.";

        setMessages((prevMessages) => [
            ...prevMessages,
            { type: "user", text: userInput },
            { type: "bot", text: botResponse }
        ]);

        setUserInput(""); // Clear input field
    };

    return (
        <div>
            <Home />
            <div style={styles.pageContainer}>
                {sections.map((section, index) => (
                    <div key={index} style={styles.section}>
                        <h2 style={styles.sectionTitle}>{section.title}</h2>
                        <div style={styles.productsGrid}>
                            {section.products.map((product) => (
                                <div
                                    key={product.id}
                                    style={styles.productCard}
                                    onClick={() => handleCardClick(product)}
                                >
                                    <img src={product.image} alt={product.name} style={styles.productImage} />
                                    <h3 style={styles.productName}>{product.name}</h3>
                                    <p style={styles.productPrice}>{product.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {selectedProduct && (
    <div style={styles.detailsPopup}>
        <div style={styles.detailsContent}>
            <button style={styles.closeButton} onClick={handleClose}>X</button>
            <Model modelSrc={selectedProduct.modelSrc} />
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.price}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>
)}

            <button style={styles.chatButton} onClick={toggleChat}>💬</button>

            {/* Chatbot Pop-up */}
            {isChatOpen && (
                <div style={styles.chatPopup}>
                    <div style={styles.chatHeader}>
                        <h3>Chatbot</h3>
                        <button onClick={toggleChat} style={styles.closeChatButton}>X</button>
                    </div>
                    <div style={styles.chatBody}>
                        {chatQuestions.slice(0, showMore ? chatQuestions.length : 2).map((msg) => (
                            <div key={msg.id} style={styles.chatMessage}>
                                <p
                                    onClick={() => handleQuestionClick(msg.id)}
                                    style={styles.chatQuestion}
                                >
                                    {msg.question}
                                </p>
                                {activeQuestion === msg.id && (
                                    <p style={styles.chatAnswer}> {msg.answer}</p>
                                )}
                            </div>
                        ))}
                        <button style={styles.showMoreButton} onClick={toggleShowMore}>
                            {showMore ? "Show Less Questions" : "Show More Questions"}
                        </button>
                        {messages.map((msg, index) => (
                            <div key={index} style={msg.type === "user" ? styles.userMessage : styles.botMessage}>
                                <p>{msg.text}</p>
                            </div>
                        ))}
                    </div>
                    <div style={styles.chatInputContainer}>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            style={styles.chatInput}
                        />
                        <button onClick={handleUserMessage} style={styles.sendButton}>Send</button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

const styles = {
    pageContainer: {
        padding: "40px",
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f9f9f9",
    },
    section: {
        marginBottom: "50px",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
    sectionTitle: {
        textAlign: "center",
        marginBottom: "30px",
        fontSize: "28px",
        color: "#333",
        fontWeight: "600",
    },
    productsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        justifyContent: "center",
    },
    productCard: {
        textAlign: "center",
        padding: "15px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
    },
    productImage: {
        width: "100%",
        height: "220px",
        objectFit: "cover",
        borderRadius: "8px",
    },
    productName: {
        fontSize: "18px",
        margin: "15px 0 5px",
        fontWeight: "500",
    },
    productPrice: {
        color: "#ff5722",
        fontWeight: "bold",
        fontSize: "16px",
    },
    detailsPopup: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw", // Full width
        height: "100vh", // Full height
        background: "#F9C745", // Fully white background
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "20px",
        overflowY: "auto", // Allow scrolling if needed
    },    
    detailsContent: {
        width: "100vw", // Responsive width
        maxWidth: "600px", // Limits size on larger screens
        background: "white",
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative", // Ensures proper stacking
    },
        
    
    chatButton: {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#F9C745",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        fontSize: "20px",
        cursor: "pointer",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
    },
    chatPopup: {
        position: "fixed",
        bottom: "80px",
        right: "20px",
        width: "350px",
        height: "450px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #ddd",
        overflow: "hidden",
        fontFamily: "'Poppins', sans-serif",
    },
    chatHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F9C745",
        color: "white",
        padding: "12px 15px",
        fontWeight: "bold",
        fontSize: "18px",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
    },
    closeChatButton: {
        backgroundColor: "transparent",
        border: "none",
        fontSize: "18px",
        color: "white",
        cursor: "pointer",
        fontWeight: "bold",
    },
    chatBody: {
        flex: 1,
        padding: "15px",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        overflow: "hidden", 
    },
    chatMessage: {
        maxWidth: "75%",
        padding: "10px",
        borderRadius: "8px",
        fontSize: "14px",
        wordWrap: "break-word",
    },
    userMessage: {
        alignSelf: "flex-end",
        color: "black",
    },
    botMessage: {
        alignSelf: "flex-start",
        backgroundColor: "#f1f1f1",
        color: "#333",
        textAlign: "left",
    },
    chatInputContainer: {
        display: "flex",
        padding: "10px",
        borderTop: "1px solid #ddd",
        backgroundColor: "#f9f9f9",
    },
    chatInput: {
        flex: 1,
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ddd",
        outline: "none",
        fontSize: "14px",
    },
    sendButton: {
        marginLeft: "10px",
        padding: "10px 15px",
        backgroundColor: "#F9C745",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold",
    },
    showMoreButton: {
        backgroundColor: "#F9C745",
        color: "white",
        border: "none",
        padding: "8px 12px",
        borderRadius: "5px",
        cursor: "pointer",
        width: "100%",
        marginTop: "10px",
    },
};

export default ProductsPage;
