export const leadsData = [
  { id: 1, name: "Ali Raza", phone: "+92 300 1234567", interest: "Real Estate Inquiry", status: "hot", date: "2026-06-28", avatar: "A", email: "ali.raza@gmail.com", city: "Karachi", botName: "RealEstate Bot" },
  { id: 2, name: "Aisha Khan", phone: "+92 321 7654321", interest: "Pricing Details - Growth Plan", status: "warm", date: "2026-06-28", avatar: "A", email: "aishakhan@outlook.com", city: "Lahore", botName: "Sales Bot" },
  { id: 3, name: "John Doe", phone: "+1 415 5552671", interest: "Agency Whitelabel Plan", status: "hot", date: "2026-06-27", avatar: "J", email: "john.doe@techagency.io", city: "New York", botName: "Agency Bot" },
  { id: 4, name: "Zainab Mir", phone: "+92 333 9876543", interest: "General Support Question", status: "cold", date: "2026-06-27", avatar: "Z", email: "zainab.mir@yahoo.com", city: "Islamabad", botName: "Support Bot" },
  { id: 5, name: "Bilal Ahmed", phone: "+92 345 1112233", interest: "Clinic Appointment Booking", status: "warm", date: "2026-06-26", avatar: "B", email: "bilal.ahmed@clinic.pk", city: "Faisalabad", botName: "Clinic Bot" },
  { id: 6, name: "Sara Malik", phone: "+92 311 5544332", interest: "Live Demo Request", status: "hot", date: "2026-06-26", avatar: "S", email: "sara.malik@brand.com", city: "Multan", botName: "Sales Bot" },
  { id: 7, name: "David Chen", phone: "+1 650 9991111", interest: "Enterprise Annual Plan", status: "warm", date: "2026-06-25", avatar: "D", email: "d.chen@enterprise.com", city: "San Francisco", botName: "Enterprise Bot" },
  { id: 8, name: "Fatima Zahra", phone: "+92 312 7878787", interest: "Restaurant Order Bot", status: "hot", date: "2026-06-25", avatar: "F", email: "fatima@restaurant.pk", city: "Karachi", botName: "Restaurant Bot" },
  { id: 9, name: "Hamza Tariq", phone: "+92 301 2223344", interest: "E-commerce Integration", status: "cold", date: "2026-06-24", avatar: "H", email: "hamza@ecom.store", city: "Sialkot", botName: "Ecom Bot" },
  { id: 10, name: "Priya Sharma", phone: "+91 98765 43210", interest: "Educational Platform Bot", status: "warm", date: "2026-06-24", avatar: "P", email: "priya@edtech.in", city: "Mumbai", botName: "EduBot" },
  { id: 11, name: "Omar Sheikh", phone: "+971 50 123 4567", interest: "Real Estate Dubai Listings", status: "hot", date: "2026-06-23", avatar: "O", email: "omar@property.ae", city: "Dubai", botName: "RealEstate Bot" },
  { id: 12, name: "Kiran Bano", phone: "+92 315 6677889", interest: "Salon Appointment Bot", status: "cold", date: "2026-06-22", avatar: "K", email: "kiran@salon.pk", city: "Peshawar", botName: "Booking Bot" },
];

export const conversationsData = [
  {
    id: 1, customer: "Ali Raza", phone: "+92 300 1234567", avatar: "A", status: "hot",
    lastMessage: "How much does the Growth plan cost exactly?", time: "2m ago", unread: 3, isOnline: true,
    messages: [
      { sender: "customer", text: "Hello, I saw your WhatsApp bot ad on Instagram.", time: "10:00 AM" },
      { sender: "bot", text: "Hello Ali! 👋 Welcome to LeadBot AI. I'm your 24/7 AI assistant. How can I help you today?", time: "10:00 AM" },
      { sender: "customer", text: "I run a real estate business. We get 50+ WhatsApp inquiries daily.", time: "10:02 AM" },
      { sender: "bot", text: "That's great! For high-volume real estate businesses, our **Growth Plan** at $49/month is perfect. It includes:\n• 2 AI Bots\n• 2,500 monthly messages\n• Auto lead capture to Google Sheets\n• Appointment booking\n\nWould you like to see a live demo?", time: "10:02 AM" },
      { sender: "customer", text: "How much does the Growth plan cost exactly?", time: "10:05 AM" },
    ]
  },
  {
    id: 2, customer: "Aisha Khan", phone: "+92 321 7654321", avatar: "A", status: "warm",
    lastMessage: "Do you have a free trial?", time: "15m ago", unread: 1, isOnline: false,
    messages: [
      { sender: "customer", text: "Hi! Do you support Urdu language?", time: "9:45 AM" },
      { sender: "bot", text: "Bilkul! 😊 LeadBot AI supports Urdu, Roman Urdu, and English — even mixed conversations! Your customers can type in any language and our AI will respond naturally.", time: "9:46 AM" },
      { sender: "customer", text: "Wow, that's perfect. Do you have a free trial?", time: "9:50 AM" },
      { sender: "bot", text: "Yes! We offer a **14-day free trial** on all plans — no credit card required. Want me to set it up for you right now?", time: "9:50 AM" },
      { sender: "customer", text: "Do you have a free trial?", time: "9:52 AM" },
    ]
  },
  {
    id: 3, customer: "John Doe", phone: "+1 415 5552671", avatar: "J", status: "hot",
    lastMessage: "We need full whitelabel for our agency.", time: "1h ago", unread: 0, isOnline: true,
    messages: [
      { sender: "customer", text: "We're a marketing agency with 15 clients. Can we resell LeadBot?", time: "9:00 AM" },
      { sender: "bot", text: "Absolutely! Our **Agency Pro Plan** at $99/month is built exactly for that! You get:\n• 5 WhatsApp Bots\n• Unlimited messages\n• Full Whitelabel dashboard\n• Your clients never see LeadBot branding\n• Priority support", time: "9:01 AM" },
      { sender: "customer", text: "Does our clients see LeadBot branding?", time: "9:03 AM" },
      { sender: "bot", text: "Not at all! 🎉 Complete whitelabel — your logo, your colors, your domain. It's 100% your product.", time: "9:03 AM" },
      { sender: "customer", text: "We need full whitelabel for our agency.", time: "9:05 AM" },
    ]
  },
  {
    id: 4, customer: "Sara Malik", phone: "+92 311 5544332", avatar: "S", status: "hot",
    lastMessage: "Book a demo call for tomorrow at 3pm.", time: "2h ago", unread: 0, isOnline: false,
    messages: [
      { sender: "customer", text: "I want to see how the bot actually works before buying.", time: "8:00 AM" },
      { sender: "bot", text: "Of course! I can schedule a free 30-minute live demo call for you. What works best — morning or afternoon?", time: "8:01 AM" },
      { sender: "customer", text: "Afternoon is better. Tomorrow?", time: "8:02 AM" },
      { sender: "bot", text: "Perfect! I've noted tomorrow afternoon. What time — 2PM, 3PM, or 4PM?", time: "8:02 AM" },
      { sender: "customer", text: "Book a demo call for tomorrow at 3pm.", time: "8:03 AM" },
      { sender: "bot", text: "✅ Done! Your demo is booked for **Tomorrow at 3:00 PM**. You'll receive a confirmation on this WhatsApp number. See you then! 🚀", time: "8:03 AM" },
    ]
  },
  {
    id: 5, customer: "Omar Sheikh", phone: "+971 50 123 4567", avatar: "O", status: "hot",
    lastMessage: "Can the bot handle Arabic?", time: "3h ago", unread: 2, isOnline: true,
    messages: [
      { sender: "customer", text: "Salam, I'm interested in a bot for my Dubai property business.", time: "7:00 AM" },
      { sender: "bot", text: "Wa Alaikum Assalam! 🌟 Welcome! LeadBot AI is perfect for real estate businesses in Dubai. We support Arabic, English, and Urdu.", time: "7:01 AM" },
      { sender: "customer", text: "Can the bot handle Arabic?", time: "7:05 AM" },
    ]
  },
];

export const analyticsData = {
  dailyMessages: [120, 180, 90, 240, 300, 270, 350],
  dailyLeads: [8, 14, 5, 22, 30, 18, 28],
  days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  planDistribution: [
    { name: "Starter", count: 34, color: "var(--accent-blue)" },
    { name: "Growth", count: 52, color: "var(--accent-purple)" },
    { name: "Pro", count: 14, color: "var(--accent-pink)" },
  ],
  topChannels: [
    { name: "WhatsApp", percentage: 78 },
    { name: "Direct Bot", percentage: 15 },
    { name: "Website Widget", percentage: 7 },
  ],
};

export const notificationsData = [
  { id: 1, text: "New hot lead: Omar Sheikh from Dubai", time: "2m ago", read: false, icon: "bx-user-plus" },
  { id: 2, text: "Ali Raza sent 3 new messages", time: "5m ago", read: false, icon: "bx-message-dots" },
  { id: 3, text: "Bot usage at 78% this month", time: "1h ago", read: true, icon: "bx-bar-chart-alt-2" },
  { id: 4, text: "Sara Malik booked a demo for tomorrow", time: "2h ago", read: true, icon: "bx-calendar-check" },
];

export const botsData = [
  { id: 1, name: "Sales Bot", status: "online", messagesThisMonth: 842, leadsCaptures: 67, whatsapp: "+92 300 0000001" },
  { id: 2, name: "Support Bot", status: "online", messagesThisMonth: 403, leadsCaptures: 28, whatsapp: "+92 300 0000002" },
];
