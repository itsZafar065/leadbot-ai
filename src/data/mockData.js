export const leadsData = [
  { id: 1, name: "Ali Raza", phone: "+92 300 1234567", interest: "Real Estate Query", status: "hot", date: "2026-06-28", avatar: "A" },
  { id: 2, name: "Aisha Khan", phone: "+92 321 7654321", interest: "Pricing Details", status: "warm", date: "2026-06-27", avatar: "A" },
  { id: 3, name: "John Doe", phone: "+1 415 5552671", interest: "Agency Plan Info", status: "hot", date: "2026-06-27", avatar: "J" },
  { id: 4, name: "Zainab Mir", phone: "+92 333 9876543", interest: "General Question", status: "cold", date: "2026-06-26", avatar: "Z" },
  { id: 5, name: "Bilal Ahmed", phone: "+92 345 1112233", interest: "Support Ticket", status: "cold", date: "2026-06-26", avatar: "B" },
  { id: 6, name: "Sara Malik", phone: "+92 311 5544332", interest: "Demo Request", status: "hot", date: "2026-06-25", avatar: "S" },
  { id: 7, name: "David Chen", phone: "+1 650 9991111", interest: "Enterprise Plan", status: "warm", date: "2026-06-25", avatar: "D" },
  { id: 8, name: "Fatima Zahra", phone: "+92 312 7878787", interest: "Appointment Booking", status: "warm", date: "2026-06-24", avatar: "F" },
];

export const conversationsData = [
  {
    id: 1,
    customer: "Ali Raza",
    phone: "+92 300 1234567",
    avatar: "A",
    status: "hot",
    lastMessage: "How much does the Growth plan cost?",
    time: "2m ago",
    unread: 3,
    messages: [
      { sender: "customer", text: "Hello, I am interested in your services.", time: "10:00 AM" },
      { sender: "bot", text: "Hello Ali! Welcome to LeadBot AI. I'm your AI assistant. How can I help you today?", time: "10:00 AM" },
      { sender: "customer", text: "I want to know about the pricing for real estate businesses.", time: "10:02 AM" },
      { sender: "bot", text: "Great choice! For real estate businesses, our Growth Plan at $49/month is perfect. It includes 2 AI bots, 2,500 monthly messages, and automatic lead capture to Google Sheets. Would you like a demo?", time: "10:02 AM" },
      { sender: "customer", text: "How much does the Growth plan cost?", time: "10:05 AM" },
    ]
  },
  {
    id: 2,
    customer: "Aisha Khan",
    phone: "+92 321 7654321",
    avatar: "A",
    status: "warm",
    lastMessage: "Can I try it for free?",
    time: "15m ago",
    unread: 1,
    messages: [
      { sender: "customer", text: "Hi! Do you offer a free trial?", time: "9:45 AM" },
      { sender: "bot", text: "Yes! We offer a 14-day free trial on all plans, no credit card required. Would you like me to get you started?", time: "9:45 AM" },
      { sender: "customer", text: "Can I try it for free?", time: "9:50 AM" },
    ]
  },
  {
    id: 3,
    customer: "John Doe",
    phone: "+1 415 5552671",
    avatar: "J",
    status: "hot",
    lastMessage: "We need a whitelabel solution.",
    time: "1h ago",
    unread: 0,
    messages: [
      { sender: "customer", text: "We are a marketing agency with 10+ clients.", time: "9:00 AM" },
      { sender: "bot", text: "That's great! Our Agency/Pro plan at $99/month is designed exactly for you. It includes 5 bots, unlimited messages, and a whitelabel dashboard you can resell to your clients.", time: "9:01 AM" },
      { sender: "customer", text: "We need a whitelabel solution.", time: "9:05 AM" },
      { sender: "bot", text: "Absolutely! Our Pro plan includes full whitelabel branding — your logo, your domain, your colors. Your clients will never know it's LeadBot AI.", time: "9:05 AM" },
    ]
  },
  {
    id: 4,
    customer: "Sara Malik",
    phone: "+92 311 5544332",
    avatar: "S",
    status: "hot",
    lastMessage: "Book a demo for tomorrow please.",
    time: "2h ago",
    unread: 0,
    messages: [
      { sender: "customer", text: "I saw your ad. Can I get a live demo?", time: "8:00 AM" },
      { sender: "bot", text: "Of course! I can schedule a 30-minute demo call for you. What time works best — morning or afternoon?", time: "8:00 AM" },
      { sender: "customer", text: "Book a demo for tomorrow please.", time: "8:02 AM" },
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
