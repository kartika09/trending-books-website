// Paste the books array here
const books = [
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    description: "A novel about choices and alternate lives.",
    price: "₹399",
    link: "https://www.amazon.in/dp/1786892731"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    description: "Easy & proven ways to build good habits.",
    price: "₹450",
    link: "https://www.amazon.in/dp/1847941834"
  },
  {
    title: "Ikigai",
    author: "Héctor García, Francesc Miralles",
    description: "The Japanese secret to a long and happy life.",
    price: "₹299",
    link: "https://www.amazon.in/dp/178633089X"
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    description: "Timeless lessons on wealth, greed, and happiness.",
    price: "₹349",
    link: "https://www.amazon.in/dp/9390166268"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    description: "A brief history of humankind.",
    price: "₹499",
    link: "https://www.amazon.in/dp/0099590085"
  },
  {
    title: "Think Like a Monk",
    author: "Jay Shetty",
    description: "Train your mind for peace and purpose.",
    price: "₹399",
    link: "https://www.amazon.in/dp/0008386595"
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    description: "What the rich teach their kids about money.",
    price: "₹299",
    link: "https://www.amazon.in/dp/1612680194"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "A fable about following your dream.",
    price: "₹350",
    link: "https://www.amazon.in/dp/8172234988"
  },
  {
    title: "Can't Hurt Me",
    author: "David Goggins",
    description: "Master your mind and defy the odds.",
    price: "₹450",
    link: "https://www.amazon.in/dp/1544512279"
  },
  {
    title: "Do It Today",
    author: "Darius Foroux",
    description: "Stop procrastinating and achieve more.",
    price: "₹199",
    link: "https://www.amazon.in/dp/939089658X"
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    description: "A counterintuitive approach to living well.",
    price: "₹375",
    link: "https://www.amazon.in/dp/0062641549"
  },
  {
    title: "Good Vibes, Good Life",
    author: "Vex King",
    description: "How self-love is the key to unlocking greatness.",
    price: "₹299",
    link: "https://www.amazon.in/dp/1788173536"
  },
  {
    title: "The Power of Your Subconscious Mind",
    author: "Joseph Murphy",
    description: "Unlock the potential of your subconscious.",
    price: "₹150",
    link: "https://www.amazon.in/dp/8194790832"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    description: "Rules for focused success in a distracted world.",
    price: "₹499",
    link: "https://www.amazon.in/dp/0349411905"
  },
  {
    title: "12 Rules for Life",
    author: "Jordan B. Peterson",
    description: "An antidote to chaos.",
    price: "₹475",
    link: "https://www.amazon.in/dp/0141988517"
  }
];


const container = document.getElementById('books-container');

books.forEach(book => {
  const card = document.createElement('div');
  card.className = 'book-card';
  card.innerHTML = `
    <h3>${book.title}</h3>
    <p><strong>Author:</strong> ${book.author}</p>
    <p>${book.description}</p>
    <p><strong>Price:</strong> ${book.price}</p>
    <a href="${book.link}" target="_blank">Buy/View</a>
  `;
  container.appendChild(card);
});
