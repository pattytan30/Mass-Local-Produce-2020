const farmData = [
    {
        "farmName" : "Boston Hill Farm",
        "openHours" : "9:00AM - 5:00PM",
        "openDays":["Open Everyday"],
        "openMonths" : ["September", "October"],
        "farmZip": "01845",
        "farmAddress" : "1370 Turnpike St, North Andover, MA 01845",
        //
        "farmFruits": ["Cantaloupes","Apple", "Strawberry", "Blueberries", "Raspberries","Peaches"] ,
        "farmVegetables": ["Pumpkins", "Tomatoes", "Corns", "Asparagus", "Potatoes", "Cucumber"],
        //
        "farmPhoto" : `http://4.bp.blogspot.com/-J1K8NxW_jb8/VicJBKevCHI/AAAAAAAADvk/X_VvVcinhuI/s1600/DSC06618.jpg`,
        "farmWeb" :`http://www.bostonhillfarm.com/`
    },
    {
        "farmName" : "Boston Public Market",
        "openHours" : "11:00AM - 6:00PM",
        "openDays":["Wednesday"],
        "openMonths" : ["May","June", "July", "August", "September", "October", "November"],
        "farmZip": "02109",
        "farmAddress" : "136 Blackstone St, Boston, MA 02109",
        "farmFruits": ["Cantaloupes","Apples", "Strawberries", "Blueberries", "Raspberries","Peaches", "Pears", "Watermelons"] ,
        "farmVegetables": ["Asparagus","Corns","Mushrooms","Mug Beans","Potatoes","Pumpkins","Radishes","Sprouts","Tomatoes","Cucumbers", "Spinach"],
        "farmPhoto" :`https://northendwaterfront.com/wp-content/uploads/2015/04/Boston-Public-Market-Exterior.jpg`,
        "farmWeb" : `https://bostonpublicmarket.org/`
    },
    {
        "farmName" : "Cambridge Winter Farmers Market",
        "openHours" : "10:00AM - 2:00PM",
        "openDays":["Saturday"],
        "openMonths" : ["January", "February", "March", "April"],
        "farmZip": "02139",
        "farmAddress" : "5 Callender Street, Cambridge MA 02139",
        // 
        "farmFruits": ["Cantaloupes","Apples", "Strawberries", "Blueberries", "Raspberries","Peaches", "Pears", "Watermelons"] ,
        "farmVegetables": ["Asparagus","Corns","Mushrooms","Mug Beans","Potatoes","Pumpkins","Radishes","Sprouts","Tomatoes","Cucumbers", "Spinach"],
        // 
        "farmPhoto" :`https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/40579.jpg`,
        "farmWeb" : `http://www.cambridgewinterfarmersmarket.com/`
    },
    {
        "farmName" : "Charlestown Farmers Market",
        "openHours" : "2:00PM - 6:00PM",
        "openDays":["Wednesday"],
        "openMonths" : ["July", "August", "September", "October"],
        "farmZip": "02129",
        "farmAddress" : "Main St & Austin St, Boston, MA 02129",
        // 
        "farmFruits": ["Cantaloupes","Apples", "Strawberries", "Blueberries", "Raspberries","Peaches", "Pears", "Watermelons"] ,
        "farmVegetables": ["Asparagus","Corns","Mushrooms","Mug Beans","Potatoes","Pumpkins","Radishes","Sprouts","Tomatoes","Cucumbers", "Spinach"],
        // 
        "farmPhoto" :`https://patch.com/img/cdn/users/393235/2013/07/raw/704be0c3dedce0d453b9e409fe672533.jpg`,
        "farmWeb" : `https://www.facebook.com/Charles-Town-Farmers-Market-WV-198296286944643/`
    },
    {
        "farmName" : "Central Square Farmers' Market",
        "openHours" : "12:00AM - 6:00PM",
        "openDays":["Monday"],
        "openMonths" : ["May","June", "July", "August", "September", "October", "November"],
        "farmZip": "02139",
        "farmAddress" : "76 Bishop Allen Dr, Cambridge, MA 02139",
        "farmFruits": ["Cantaloupes","Apples", "Strawberries", "Blueberries", "Raspberries","Peaches", "Pears", "Watermelons"] ,
        "farmVegetables": ["Asparagus","Corns","Mushrooms","Mug Beans","Potatoes","Pumpkins","Radishes","Sprouts","Tomatoes","Cucumbers", "Spinach"],
        "farmPhoto" :`https://d35tcqv0jvl9z6.cloudfront.net/res/fittco/image/upload/vs3l2p2jqmqiumlg9df3/1557512889.jpg`,
        "farmWeb" : `https://www.massfarmersmarkets.org/central`
    },
    {
        "farmName" : "Cider Hill Farm",
        "openHours" : "8:00AM - 6:00PM",
        "openDays":["Open Everyday"],
        "openMonths" : ["January","February","March","April","May","June", "July", "August", "September", "October", "November", "December"],
        "farmZip": "01913",
        "farmAddress" : "45 Fern Avenue, Amesbury, MA 01913",
        //
        "farmFruits": ["Cantaloupes","Apples", "Strawberries", "Blueberries", "Raspberries","Peaches", "Pears", "Watermelons"] ,
        "farmVegetables": ["Corns","Mushrooms","Mug Beans","Potatoes","Pumpkins","Radishes","Sprouts","Tomatoes","Cucumbers"],
        //
        "farmPhoto" : `https://www.victoriamag.com/wp-content/uploads/2018/10/0featured-696x464.jpg`,
        "farmWeb" :`https://www.ciderhill.com/`
    },
    {
        "farmName" : "Copley Square Farmers Market",
        "openHours" : "11:00AM - 6:00PM",
        "openDays":["Tuesday", "Friday"],
        "openMonths" : ["May","June", "July", "August", "September", "October", "November"],
        "farmZip": "02116",
        "farmAddress" : "139 St James Ave, Boston, MA 02116",
        // 
        "farmFruits": ["Cantaloupes","Apples", "Strawberries", "Blueberries", "Raspberries","Peaches", "Pears", "Watermelons"] ,
        "farmVegetables": ["Asparagus","Corns","Mushrooms","Mug Beans","Potatoes","Pumpkins","Radishes","Sprouts","Tomatoes","Cucumbers", "Spinach"],
        // 
        "farmPhoto" :`https://i.pinimg.com/originals/e7/3d/54/e73d5461ed6dae67a00f11a3591248ec.jpg`,
        "farmWeb" : `https://www.massfarmersmarkets.org/copley`
    },
    {
        "farmName" : "Davis Square Farmers' Market",
        "openHours" : "12:00AM - 6:00PM",
        "openDays":["Wednesday"],
        "openMonths" : ["May","June", "July", "August", "September", "October", "November"],
        "farmZip": "02144",
        "farmAddress" : "Day St &, Herbert St, Somerville, MA 02144",
        "farmFruits": ["Cantaloupes","Apples", "Strawberries", "Blueberries", "Raspberries","Peaches", "Pears", "Watermelons"] ,
        "farmVegetables": ["Asparagus","Corns","Mushrooms","Mug Beans","Potatoes","Pumpkins","Radishes","Sprouts","Tomatoes","Cucumbers", "Spinach"],
        "farmPhoto" :`https://i0.wp.com/media.erincooks.com/images/2010/05/davis_farmers_market8.jpg`,
        "farmWeb" : `https://www.massfarmersmarkets.org/davis`
    },
    {
        "farmName" : "Dewey Square Farmers Market",
        "openHours" : "11:30AM - 6:00PM",
        "openDays":["Tuesday", "Thursday"],
        "openMonths" : ["May","June", "July", "August", "September", "October", "November"],
        "farmZip": "02210",
        "farmAddress" : "600 Atlantic Ave, Boston, MA 02210",
        "farmFruits": ["Cantaloupes","Apples", "Strawberries", "Blueberries", "Raspberries","Peaches", "Pears", "Watermelons"] ,
        "farmVegetables": ["Asparagus","Corns","Mushrooms","Mug Beans","Potatoes","Pumpkins","Radishes","Sprouts","Tomatoes","Cucumbers", "Spinach"],
        "farmPhoto" :`https://d35tcqv0jvl9z6.cloudfront.net/res/fittco/image/upload/a916vnwi4pysugco5avg/1557513439.jpg`,
        "farmWeb" : `https://bostonpublicmarket.org/seasonal/`
    },
    {
        "farmName" : "Ferjulian farm",
        "openHours" : "12:00PM - 6:00PM",
        "openDays":["Open Everyday"],
        "openMonths" : ["April","May","June", "July", "August", "September", "October", "November", "December"],
        "farmZip": "01749",
        "farmAddress" : "7 Lewis Street Hudson, MA 01749",
        "farmFruits": ["Cantaloupes","Apples", "Strawberries", "Blueberries", "Raspberries","Peaches", "Pears", "Watermelons"] ,
        "farmVegetables": ["Asparagus","Corns","Mushrooms","Mug Beans","Potatoes","Pumpkins","Radishes","Sprouts","Tomatoes","Cucumbers", "Spinach"],
        "farmPhoto" : `https://s3-media0.fl.yelpcdn.com/bphoto/1IhteXSL883vJ556CoZk4g/o.jpg`,
        "farmWeb" :`https://www.ferjulians.com/`
    },
    {
        "farmName" : "Hanson's Farm",
        "openHours" : "9:00AM - 5:30PM",
        "openDays":["Open Everyday"],
        "openMonths" : ["May","June", "July", "August", "September", "October", "November"],
        "farmZip": "01701",
        "farmAddress" : "20 Nixon Rd, Framingham, MA 01701",
        "farmFruits": ["Cantaloupes","Apples", "Strawberries", "Blueberries", "Raspberries","Peaches", "Pears", "Watermelons"] ,
        "farmVegetables": ["Asparagus","Corns","Mushrooms","Mug Beans","Potatoes","Pumpkins","Radishes","Sprouts","Tomatoes","Cucumbers", "Spinach"],
        "farmPhoto" : `https://i.pinimg.com/originals/0a/16/f6/0a16f69839fbcd8f29159a1caf901fcd.jpg`,
        "farmWeb" :`http://www.hansonsfarm.50webs.com/`
    },
    {
        "farmName" : "Honey Pot Hill Orchards",
        "openHours" : "9:00AM - 6:00PM",
        "openDays":["Open Everyday"],
        "openMonths" : ["January","February","March","April","May","June", "July", "August", "September", "October", "November", "December"],
        "farmZip": "01775",
        "farmAddress" : "138 Sudbury Road, Stow, Ma 01775",
        //
        "farmFruits": ["Apples", "Blueberries", "Pears"] ,
        "farmVegetables": ["Pumpkins"],
        //
        "farmPhoto" : `https://www.rcapsolutions.org/wp-content/uploads/2017/09/HoneyPotPic5-768x576.jpg`,
        "farmWeb" :`https://www.honeypothill.com/hayrides`
    },
    {
        "farmName" : "Lookout Farm",
        "openHours" : "10:00AM - 5:00PM",
        "openDays":["Open Everyday"],
        "openMonths" : ["August", "September", "October", "November"],
        "farmZip": "01760",
        "farmAddress" : "89 Pleasant St S, Natick, MA 01760",
        "farmFruits": ["Apples", "Strawberries", "Blueberries", "Raspberries","Peaches", "Pears"] ,
        "farmVegetables": ["Corns","Mushrooms","Mug Beans","Potatoes","Pumpkins","Radishes","Sprouts","Tomatoes"],
        "farmPhoto" : `https://i.pinimg.com/originals/ac/17/4d/ac174dd1ca343ef4f36d1b22457a9d98.jpg`,
        "farmWeb" :`https://www.lookoutfarm.com/`
    },
    {
        "farmName" : "Marini Farm",
        "openHours" : "8:30AM - 6:00PM",
        "openDays":["Open Everyday"],
        "openMonths" : ["January","February","March","April","May","June", "July", "August", "September", "October", "November", "December"],
        "farmZip": "01938",
        "farmAddress" : "259 Linebrook Rd. Ipswich, MA 01938",
        "farmFruits": ["Apples", "Strawberries", "Blueberries", "Raspberries"] ,
        "farmVegetables": ["Asparagus","Corns","Mug Beans","Potatoes","Pumpkins","Tomatoes","Cucumbers", "Spinach"],
        "farmPhoto" : `https://northshorekid.com/sites/default/files/styles/post_photo/public/events/marini_farm_corn_maze.jpg?itok=4hCmWY3n`,
        "farmWeb" :`https://www.marinifarm.com/`
    },
    {
        "farmName" : "Marshfield Winter Monthly Farmers Market",
        "openHours" : "10:00AM - 1:00PM",
        "openDays":["Saturday"],
        "openMonths" : ["October", "November","December"],
        "farmZip": "02050",
        "farmAddress" : "140 Main Street, Route 3A, Marshfield, MA 02050",
        "farmFruits": ["Cantaloupes","Apples", "Strawberries", "Blueberries", "Raspberries","Peaches", "Pears", "Watermelons"] ,
        "farmVegetables": ["Asparagus","Corns","Mushrooms","Mug Beans","Potatoes","Pumpkins","Radishes","Sprouts","Tomatoes","Cucumbers", "Spinach"],
        "farmPhoto" :`https://tuftsdaily.com/wp-content/uploads/2020/02/IMG_2347-copy-1250x833.jpg`,
        "farmWeb" : `https://marshfieldfair.org/farmers-market/`
    },

    {
        "farmName" : "Parlee Farm",
        "openHours" : "8:00AM - 1:00PM",
        "openDays":["Closed on Monday"],
        "openMonths" : ["June", "July", "August", "September", "October"],
        "farmZip": "01879",
        "farmAddress" : "95 Farwell Road, Tyngsboro MA, 01879",
        "farmFruits": ["Apples", "Strawberries", "Blueberries", "Peaches", "Pears"] ,
        "farmVegetables": ["Asparagus","Corns","Mushrooms","Mug Beans","Potatoes","Pumpkins","Radishes","Sprouts","Tomatoes","Cucumbers", "Spinach"],
        "farmPhoto" : `https://parleefarms.com/wp-content/uploads/2020/04/IMG_7010e_300-768x512.jpg`,
        "farmWeb" :`https://parleefarms.com/`
    },
    {
        "farmName" : "Russell Orchards",
        "openHours" : "9:30AM - 5:00PM",
        "openDays":["Open Everyday"],
        "openMonths" : ["January","February","March","April","May","June", "July", "August", "September", "October", "November", "December"],
        "farmZip": "01938",
        "farmAddress" : "143 Argilla Rd, Ipswich, MA 01938",
        "farmFruits": ["Apples", "Strawberries", "Blueberries", "Raspberries"] ,
        "farmVegetables": ["Asparagus","Corns","Mushrooms","Mug Beans","Potatoes","Pumpkins","Radishes","Tomatoes","Cucumbers"],
        "farmPhoto" : `https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/14896.jpg`,
        "farmWeb" :`https://www.russellorchards.com/`
    },
    {
        "farmName" : "Shelburne Farm",
        "openHours" : "9:00AM - 5:45PM",
        "openDays":["Open Everyday"],
        "openMonths" : ["August", "September", "October", "November"],
        "farmZip": "01775",
        "farmAddress" : "106 West Acton Road, Stow, MA 01775",
        "farmFruits": ["Apples", "Strawberries", "Blueberries", "Peaches", "Pears"] ,
        "farmVegetables": ["Mug Beans","Potatoes","Pumpkins"],
        "farmPhoto" : `https://8mf.9c0.myftpupload.com/wp-content/uploads/2014/06/shelburne-farms.jpg`,
        "farmWeb" :`https://www.shelburnefarm.com/`
    },
    {
        "farmName" : "Somerville Winter Farmers Market",
        "openHours" : "9:30AM - 2:00PM",
        "openDays":["Saturday"],
        "openMonths" : ["January", "February", "March", "April", "December"],
        "farmZip": "02143",
        "farmAddress" : "191 Highland Ave, Somerville, MA 02143",
        "farmFruits": ["Cantaloupes","Apples", "Strawberries", "Blueberries", "Raspberries","Peaches", "Pears", "Watermelons"] ,
        "farmVegetables": ["Asparagus","Corns","Mushrooms","Mug Beans","Potatoes","Pumpkins","Radishes","Sprouts","Tomatoes","Cucumbers", "Spinach"],
        "farmPhoto" :`https://marjorierwilliams.com/wp-content/uploads/2019/01/IMG_9506.jpg`,
        "farmWeb" : `https://www.somwintermarket.org/`
    },
    {
        "farmName" : "South Boston Farmers Market",
        "openHours" : "12:00AM - 6:00PM",
        "openDays":["Monday"],
        "openMonths" : ["May","June", "July", "August", "September", "October", "November"],
        "farmZip": "02127",
        "farmAddress" : "446 West Broadway, Boston, MA 02127",
        "farmFruits": ["Cantaloupes","Apples", "Strawberries", "Blueberries", "Raspberries","Peaches", "Pears", "Watermelons"] ,
        "farmVegetables": ["Asparagus","Corns","Mushrooms","Mug Beans","Potatoes","Pumpkins","Radishes","Sprouts","Tomatoes","Cucumbers", "Spinach"],
        "farmPhoto" :`https://media.timeout.com/images/101657777/1372/772/image.jpg`,
        "farmWeb" : `https://www.sbndc.org/south-boston-farmers-market`
    },
    {
        "farmName" : "The Farmers' Market at the Harvard Ed Portal",
        "openHours" : "3:00PM - 7:00PM",
        "openDays":["Friday"],
        "openMonths" : ["June", "July", "August", "September", "October"],
        "farmZip": "02134",
        "farmAddress" : "224 Western Ave, Boston, MA 02134",
        "farmFruits": ["Cantaloupes","Apples", "Strawberries", "Blueberries", "Raspberries","Peaches", "Pears", "Watermelons"] ,
        "farmVegetables": ["Asparagus","Corns","Mushrooms","Mug Beans","Potatoes","Pumpkins","Radishes","Sprouts","Tomatoes","Cucumbers", "Spinach"],
        "farmPhoto" :`https://d2j8c2rj2f9b78.cloudfront.net/uploads/a-guide-to-charlottes-best-farmers-markets/content/Farmers-Market-Getty-Images-no-credit.jpg`,
        "farmWeb" : `https://green.harvard.edu/events/farmers-market-harvard-ed-portal-1`
    },
    {
        "farmName" : "Ward's Berry Farm",
        "openHours" : "9:00AM - 7:00PM",
        "openDays":["Open Everyday"],
        "openMonths" : ["January","February","March","April","May","June", "July", "August", "September", "October", "November", "December"],
        "farmZip": "02067",
        "farmAddress" : "614 South Main Street, Sharon, MA  02067",
        "farmFruits": ["Cantaloupes","Apples", "Strawberries", "Blueberries", "Raspberries","Pears"],
        "farmVegetables": ["Asparagus","Corns","Mushrooms","Mug Beans","Potatoes","Pumpkins","Radishes","Tomatoes","Cucumbers"],
        "farmPhoto" : `https://media-cdn.tripadvisor.com/media/photo-s/0d/22/0c/1b/pick-your-own-pumpkin.jpg`,
        "farmWeb":`https://wardsberryfarm.com/index.html`
    },
    {
        "farmName" : "Wayland Winter Farmers' Market",
        "openHours" : "11:00AM - 2:00PM",
        "openDays":["Saturday"],
        "openMonths" : ["January", "February", "March"],
        "farmZip": "01778",
        "farmAddress" : "397 Boston Post Road, Wayland, MA 01778",
        "farmFruits": ["Cantaloupes","Apples", "Strawberries", "Blueberries", "Raspberries","Peaches", "Pears", "Watermelons"] ,
        "farmVegetables": ["Asparagus","Corns","Mushrooms","Mug Beans","Potatoes","Pumpkins","Radishes","Sprouts","Tomatoes","Cucumbers", "Spinach"],
        "farmPhoto" :`http://cache.boston.com/resize/bonzai-fba/Globe_Photo/2010/01/25/1264472138_2479/539w.jpg`,
        "farmWeb" : `https://www.facebook.com/pages/category/Farmers-Market/Wayland-Winter-Farmers-Market-161090303930270/`
    },
    {
        "farmName" : "West End Creamery",
        "openHours" : "12:00PM - 6:00PM",
        "openDays":["Friday", "Saturday","Sunday"],
        "openMonths" : ["January","February","March","April","May","June", "July", "August", "September", "October", "November"],
        "farmZip": "01588",
        "farmAddress" : "481 Purgatory Rd, Whitiinsville, MA 01588",
        "farmFruits": ["Apples"] ,
        "farmVegetables": ["Corns","Pumpkins"],
        "farmPhoto" : `https://worcestercentralkidscalendar.com/wp-content/uploads/west-end-creamery-600x330.jpg`,
        "farmWeb" :`https://www.westendcreamery.com/`
    },
    {
        "farmName" : "Wilson Farm",
        "openHours" : "9:00AM - 7:00PM",
        "openDays":["Open Everyday"],
        "openMonths" : ["January","February","March","April","May","June", "July", "August", "September", "October", "November","December"],
        "farmZip": "02421",
        "farmAddress" : "10 Pleasant Street, Lexington, MA 02421",
        "farmFruits": ["Cantaloupes","Apples", "Strawberries", "Blueberries", "Raspberries","Peaches", "Pears", "Watermelons"] ,
        "farmVegetables": ["Asparagus","Corns","Mushrooms","Mug Beans","Potatoes","Pumpkins","Radishes","Sprouts","Tomatoes","Cucumbers", "Spinach"],
        "farmPhoto" : `http://afoodieaffair.com/wp-content/uploads/2011/09/wilson-farm-3.jpg`,
        "farmWeb" :`https://bostonpublicmarket.org/`
    }
]
//write api

const result = document.getElementById("farm-result");
const container = document.createElement("ul");
container.setAttribute("class", "result-container");
result.appendChild(container);

farmData.forEach(appendList);

function appendList(farm){
    const list = document.createElement("li");
    list.setAttribute("class","result-list filter-list hide");
    list.setAttribute("name", "result-list");
    const listLink = document.createElement("a");
    listLink.setAttribute("href", farm.farmWeb);
    const listContainer = document.createElement("div");
    listContainer.setAttribute("class", "result-list-container");
    const photoContainer = document.createElement("div");
    photoContainer.setAttribute("class", "farm-photo-container");
    const a = document.createElement("a");
    a.setAttribute("class", "farmPhoto");
    const img = document.createElement("img");
    img.setAttribute("class", "farm-photo");
    img.setAttribute("src", farm.farmPhoto);
    const listText = document.createElement("div");
    listText.setAttribute("class","result-text");
    const h3 = document.createElement("h3");
    h3.setAttribute("class","farm-name farm-info");
    h3.innerHTML = `${farm.farmName}`;
    const openMonths = document.createElement("p");
    openMonths.setAttribute("class", "farm-open-dates farm-info");
    openMonths.innerHTML = `${farm.openMonths[0]}`+` - `+`${farm.openMonths[(farm.openMonths).length-1]}`;
    const openHours = document.createElement("p");
    openHours.setAttribute("class", "farm-open-hours farm-info");
    openHours.innerHTML = `${farm.openHours}`;
    const farmAddress = document.createElement("p");
    farmAddress.setAttribute("class", "farm-address farm-info");
    farmAddress.innerHTML = `${farm.farmAddress}`;
    container.appendChild(list);
    //list.appendChild(listContainer);
    list.appendChild(listLink);
    listLink.appendChild(listContainer);
    listContainer.appendChild(photoContainer);
    listContainer.appendChild(listText);
    photoContainer.appendChild(a);
    a.appendChild(img);
    listText.appendChild(h3);
    listText.appendChild(openMonths);
    listText.appendChild(openHours);
    listText.appendChild(farmAddress);
}


// date input
const date = document.getElementById("date");
// fruits 
const fruits = document.getElementsByName("farmFruits");
// vegetables
const vegetables = document.getElementsByName("farmVegetables");
//location 
const distance = document.getElementsByName("farmDistance");

const resultList = document.getElementsByName("result-list");
const nextButtonDate = document.getElementById("date-next-btn");
const nextButtonFruits = document.getElementById("fruits-next-btn");
const nextButtonVegetables = document.getElementById("vegetables-next-btn");
const goButton = document.getElementById("go-btn");

const filter1 = document.getElementById("filter1");
const filter2 = document.getElementById("filter2");
const filter3 = document.getElementById("filter3");
const farmSearchResult = document.getElementById("farm-search-result");
const farmSearchFilter = document.getElementById("farm-search-filter");
const resultPageButton = document.getElementById("result-page-btn");
const reminderContainer1 = document.getElementById("reminder1");
const reminderContainer2 = document.getElementById("reminder2");

// filter date/month
date.addEventListener('input', searchMonth);


let monthArray = ["January", "February", "March", "April", "May", 
"June","July", "August", "September", "October", "November", "December"];
let monthName = "";

function searchMonth(){
  let dateString = date.value + '';
  let i = dateString.indexOf('-');
  let monthId = "";
  if (i!==-1)
   monthId = dateString.substr(i+1,2);
  monthName = monthArray[(monthId-1)];
  
  console.log(monthId);
  console.log(monthName);
}
//
let filterArr1 = [];
nextButtonDate.addEventListener('click', moveToFruits);

function moveToFruits(){
    filterDate();
    filter1.classList.add("hide");
    filter2.classList.remove("hide");
}

function filterDate(){
    for (let l =0; l <farmData.length;l++){
        if(farmData[l].openMonths.indexOf(monthName)!==-1){
            filterArr1.push(l);
        }
    }
    console.log(filterArr1);
}

// filter  item
// filter fruits
nextButtonFruits.addEventListener("click", moveToVegetables);
function moveToVegetables(){
    getFruits();
  filterFruits();
  filter2.classList.add("hide");
  filter3.classList.remove("hide");
}

let selectedFruits = [];
 function getFruits() {
        for (let n = 0; n < fruits.length; n++) {
            if (fruits[n].checked) {
                selectedFruits.push(fruits[n].value);
            }
        }
   console.log(selectedFruits);}    

let filterArr2 = [];
function filterFruits(){
    let filterArr2Pre = [];
    if (selectedFruits.length == 0){
        filterArr2 = filterArr1;
    }else{
        if (filterArr1.length == 0 ){
            let check1 = []; 
            let check = [];
            for (let l = 0; l < farmData.length; l++){
                let check = selectedFruits.some(f => farmData[l].farmFruits.includes(f));
                if (check == true){
                    filterArr2Pre.push(l);
                }
                check1.push(check)
            }
            filterArr2 = filterArr2Pre;
        }else{
            for (let l = 0; l <filterArr1.length;l++){
            let check = selectedFruits.some(f => farmData[filterArr1[l]].farmFruits.includes(f));
            console.log(check);
            if (check == true){
                filterArr2Pre.push(l);
            }
        }
        for (let m = 0; m < filterArr2Pre.length;m++){
            filterArr2.push(filterArr1[filterArr2Pre[m]]);
        }
    }
    }
    console.log(filterArr2);
}


//   filter vegetable
nextButtonVegetables.addEventListener("click", moveToResults);

function moveToResults(){
    getVegetables();
  filterVegetables();
  filterResults();
  filter3.classList.add("hide");
}
 
let selectedVegetables = [];
 function getVegetables() {
        for (let n = 0; n < vegetables.length; n++) {
            if (vegetables[n].checked) {
                selectedVegetables.push(vegetables[n].value);
            }
        }
   console.log(selectedVegetables);}
        
let filterArr3 = [];
function filterVegetables(){
    let filterArr3Pre = [];
    if(selectedVegetables.length == 0){
        filterArr3 = filterArr2;
    }else{ if (filterArr2.length == 0){
        let check1 = [];
        let check = [];
        for (l = 0; l <farmData.length;l++){
            let check = selectedVegetables.some(f => farmData[l].farmVegetables.includes(f));
            if(check == true){
                filterArr3Pre.push(l);
            }
            check1.push(check);
        }
        filterArr3 = filterArr3Pre;

    }else{
        for (let l = 0; l <filterArr2.length;l++){
        let check = selectedVegetables.some(f => farmData[filterArr2[l]].farmVegetables.includes(f));
        console.log(check);
        if (check == true){
            filterArr3Pre.push(l);
        }
    }
    for (let m = 0; m < filterArr3Pre.length;m++){
        filterArr3.push(filterArr2[filterArr3Pre[m]]);
    }
    }
    }
    console.log(filterArr3);
}
//
//

function filterResults(){
    farmSearchFilter.classList.add("hide");
    farmSearchFilter.classList.remove("farm-search-filter");
    farmSearchResult.classList.remove("hide");
    if (filterArr3.length == 0){
        reminderContainer1.classList.remove("hide");
        reminderContainer2.classList.remove("hide");
        for (let i = 0; i <farmData.length; i++){
            resultList[i].classList.remove("hide");
        }
    }
    else{for (let p = 0; p<filterArr3.length;p++){
        resultList[filterArr3[p]].classList.remove('hide');
    }}
}




// result page button
// const resetFilterButton = document.getElementById("reset-filter-btn");
const backToQuizButton = document.getElementById("go-to-quiz-btn");
const backToHomeButton = document.getElementById("back-to-home-btn");
