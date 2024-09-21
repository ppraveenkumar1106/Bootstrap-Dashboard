const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3001;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(express.json());


const data = {
  cards: [
    { _id: 1, name: "Total Sales", icon: "bi bi-arrow-down-short", percentage: 3.93, amount: 3383617571, active: false, color: "red" },
    { _id: 2, name: "Total Units", icon: "bi bi-arrow-down-short", percentage: 11.18, amount: 1274373450, active: false, color: "red" },
    { _id: 3, name: "Store Count", icon: "bi bi-arrow-down-short", percentage: 18.39, amount: 244, active: false, color: "red" },
    { _id: 4, name: 'Item Count', icon: 'bi bi-arrow-down-short', percentage: 1.76, amount: 7029, active: false, color: "red" },
    { _id: 5, name: 'Avg.Sales/Store/Week', icon: 'bi bi-arrow-up-short', percentage: 17.85, amount: 308162, active: true, color: "green" },
    { _id: 6, name: 'Avg.itemCount/Store', icon: 'bi bi-arrow-up-short', percentage: 20.39, amount: 2881, active: true, color: "green" }
  ],

  products: [
    { _id: 1, preview: "../assest/cigrets-1.jpg", name: "Tobacco - Premium Cigars", price: 50, sold: 100 },
    { _id: 2, preview: "../assest/candy-1.jpg", name: "Candy - Assorted Gummies", price: 46, sold: 98 },
    { _id: 3, preview: "../assest/cigrets-2.jpg", name: "Tobacco - Cigarettes", price: 59, sold: 74 },
    { _id: 4, preview: "../assest/candy-2.jpg", name: "Candy - Chocolate Bars", price: 32, sold: 63 },
    { _id: 5, preview: "../assest/cigrets-3.jpg", name: "Tobacco - Chewing Tobacco", price: 79, sold: 41 },
    { _id: 6, preview: "../assest/candy-3.jpg", name: "Candy - Hard Candies", price: 79, sold: 41 },
    { _id: 7, preview: "../assest/cigrets-4.jpg", name: "Tobacco - Rolling Papers",  price: 79, sold: 41 },
    { _id: 8, preview: "../assest/candy-4.jpg", name: "Candy - Lollipops", price: 79, sold: 41 },

  ],

  transfer: [
    { id: 300500, item: "Tobacco - Premium Cigars",     issueDate: "13 Sep 2024", dueDate: "13 Oct 2024", total: "$250.00", status: "Paid" },
    { id: 300499, item: "Candy - Assorted Gummies",     issueDate: "12 Sep 2024", dueDate: "12 Oct 2024", total: "$50.00",  status: "Paid" },
    { id: 300498, item: "Tobacco - Cigarettes",         issueDate: "12 Sep 2024", dueDate: "12 Oct 2024", total: "$150.00", status: "Paid" },
    { id: 300497, item: "Candy - Chocolate Bars",       issueDate: "11 Sep 2024", dueDate: "11 Oct 2024", total: "$75.00",  status: "Paid" },
    { id: 300496, item: "Tobacco - Chewing Tobacco",    issueDate: "13 Aug 2024", dueDate: "13 Sep 2024", total: "$120.00", status: "Due" },
    { id: 300495, item: "Candy - Hard Candies",         issueDate: "11 Aug 2024", dueDate: "11 Sep 2024", total: "$60.00",  status: "Due" },
    { id: 300494, item: "Tobacco - Rolling Papers",     issueDate: "10 Aug 2024", dueDate: "10 Sep 2024", total: "$30.00",  status: "Due" },
    { id: 300493, item: "Candy - Lollipops",            issueDate: "25 Jul 2024", dueDate: "25 Aug 2024", total: "$40.00",  status: "Canceled" },
    { id: 300492, item: "Tobacco - Pipe Tobacco",       issueDate: "14 Jul 2024", dueDate: "14 Jun 2024", total: "$100.00", status: "Canceled" },
    { id: 300491, item: "Candy - Sour Candy",           issueDate: "08 Sep 2024", dueDate: "08 Oct 2024", total: "$45.00",  status: "Paid" },
    { id: 300490, item: "Tobacco - Menthol Cigarettes", issueDate: "05 Sep 2024", dueDate: "05 Oct 2024", total: "$180.00", status: "Paid" },
    { id: 300489, item: "Candy - Jelly Beans",          issueDate: "03 Sep 2024", dueDate: "03 Oct 2024", total: "$35.00",  status: "Paid" },
    { id: 300488, item: "Tobacco - Snuff",              issueDate: "01 Sep 2024", dueDate: "01 Oct 2024", total: "$110.00", status: "Paid" },
    { id: 300487, item: "Candy - Marshmallows",         issueDate: "30 Aug 2024", dueDate: "30 Sep 2024", total: "$25.00",  status: "Paid" },
    { id: 300486, item: "Tobacco - Hand-Rolled Cigars", issueDate: "28 Aug 2024", dueDate: "28 Sep 2024", total: "$260.00", status: "Due" },
    { id: 300485, item: "Candy - Licorice",             issueDate: "26 Aug 2024", dueDate: "26 Sep 2024", total: "$40.00",  status: "Due" },
    { id: 300484, item: "Tobacco - Filtered Cigars",    issueDate: "24 Aug 2024", dueDate: "24 Sep 2024", total: "$170.00", status: "Due" },
    { id: 300483, item: "Candy - Cotton Candy",         issueDate: "22 Aug 2024", dueDate: "22 Sep 2024", total: "$15.00",  status: "Canceled" },
    { id: 300482, item: "Tobacco - Cigarillos",         issueDate: "20 Aug 2024", dueDate: "20 Sep 2024", total: "$220.00", status: "Canceled" },
    { id: 300481, item: "Candy - Gummy Bears",          issueDate: "18 Aug 2024", dueDate: "18 Sep 2024", total: "$50.00",  status: "Paid" },
  ],

  onlycards : [
    { img:  "../assest/cigrets-1.jpg", title: "Tobaco", description: "Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", price: "123.45" },
    { img:  "../assest/candy-1.jpg",   title: "Candy",  description: "Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", price: "145.23" },
    { img:  "../assest/cigrets-2.jpg", title: "Tobaco", description: "Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", price: "135.15" },
    { img:  "../assest/candy-2.jpg",   title: "Candy",  description: "Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", price: "180.35" },
    { img:  "../assest/cigrets-3.jpg", title: "Tobaco", description: "Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", price: "163.45" },
    { img:  "../assest/candy-3.jpg",   title: "Candy",  description: "Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", price: "189.85" },
    { img:  "../assest/cigrets-4.jpg", title: "Tobaco", description: "Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", price: "140.81" },
    { img:  "../assest/candy-4.jpg",   title: "Candy",  description: "Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", price: "181.28" },
    { img:  "../assest/cigrets-5.jpg", title: "Tobaco", description: "Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", price: "156.02" },
    { img:  "../assest/candy-5.jpg",   title: "Candy",  description: "Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", price: "178.26" },
    { img:  "../assest/cigrets-6.jpg", title: "Tobaco", description: "Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", price: "182.68" },
    { img: "../assest/candy-6.jpg",    title: "Candy",  description: "Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", price: "172.68" },
  ],

Overview: [
    {_id: 1, number: "#2457", customer: "Brandon Jacob", product: "At praesentium minu", price: 64, status: "Approved"},
    {_id: 2, number: "#2147", customer: "Bridie Kessler", product: "Blanditiis dolor omnis similique", price: 47, status: "Pending"},
    {_id: 3, number: "#2049", customer: "Ashleigh Langosh", product: "At recusandae consectetur", price: 147, status: "Approved"},
    {_id: 4, number: "#2644", customer: "Angus Grady", product: "Ut voluptatem id earum et", price: 67, status: "Rejected"},
    { _id: 5, number: "#3592", customer: "Raheem Lehner", product: "Sunt similique distinctio", price: 135, status: "Approved"},
    { _id: 6, number: "#1234", customer: "Emily Johnson", product: "Laboriosam mollitia et", price: 89, status: "Approved"},
    { _id: 7, number: "#5678", customer: "Michael Smith", product: "Dignissimos aperiam pariatur", price: 72, status: "Pending"},
    { _id: 8, number: "#9101", customer: "Sophia Brown", product: "Eiusmod tempor incididunt", price: 54, status: "Rejected" }
  ]

};

//end point
app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});