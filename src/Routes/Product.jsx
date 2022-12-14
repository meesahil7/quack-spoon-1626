import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { CategoryItems } from "../Components/CategoryItems";
import { ScrollingExample } from "../Components/PopUpModel";
import { ProductItems } from "../Components/ProductItems";
{/* <iframe width="734" height="413" src="https://www.youtube.com/embed/UwI71cKFR6g" title="Urban Company | Introducing Roll-on Waxing ft. Yami Gautam| Salon at Home" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */ }


// {
//   "Service_page_data": [
//     {
//       "Salon_for_women_data": [
//         {
//           "id": 1,
//           "Title": "Salon For Women",
//           "videos": [
//             {
//               "id": "1",
//               "vid": "https://www.youtube.com/watch?v=BENmAwUev0Q "
//             },
//             {
//               "id": "2",
//               "vid": "https://www.youtube.com/watch?v=77wWnAJdm8I"
//             }
//           ],
//           "package": [
//             {
//               "id": "1",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1635313403372-16db5c.png",
//               "para": "BestSeller Packages"
//             },
//             {
//               "id": "2",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1635313403372-16db5c.png",
//               "para": "Make your Packages"
//             },
//             {
//               "id": "3",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1655977998579-8de14b.png",
//               "para": "Waxing"
//             },
//             {
//               "id": "4",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1655287480435-d29c6c.png",
//               "para": "Facial & cleanup"
//             },
//             {
//               "id": "5",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1655287465245-e4dca0.png",
//               "para": "Manicure"
//             },
//             {
//               "id": "6",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1655287464682-7ab5c1.png",
//               "para": "Pedicure"
//             },
//             {
//               "id": "7",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1655287464206-1f4ad4.png",
//               "para": "Threading & face wax"
//             },
//             {
//               "id": "8",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1655287480991-344026.png",
//               "para": "Bleach & detan"
//             },
//             {
//               "id": "9",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1655287475795-1630ef.png",
//               "para": "Hair Colour & care"
//             }
//           ],
//           "packages_components1": [
//             {
//               "id": "1",
//               "title": "Full chocolate | chocolate roll-on wacxing",
//               "price": "₹849",
//               "time": "1 hr 5 mins",
//               "para": [
//                 {
//                   "id": "1",
//                   "para": "Eyebrow threading"
//                 },
//                 {
//                   "id": "2",
//                   "para": "Chocolate full arms, underarms, full legs"
//                 },
//                 {
//                   "id": "3",
//                   "para": "Upper lip threading"
//                 }
//               ]
//             },
//             {
//               "id": "2",
//               "title": "Glow getter",
//               "price": "₹1619",
//               "time": "1 hr 25 mins",
//               "para": [
//                 {
//                   "id": "1",
//                   "para": "O3+ shine & glow facial"
//                 },
//                 {
//                   "id": "2",
//                   "para": "Upper lip threading"
//                 }
//               ]
//             },
//             {
//               "id": "3",
//               "title": "Make your own package-roll on special",
//               "price": "₹1284",
//               "time": "1 hr 50 mins",
//               "para": [
//                 {
//                   "id": "1",
//                   "para": "Full Legs (No Bikini/Brazilian) (Chocolate Roll-on)"
//                 },
//                 {
//                   "id": "2",
//                   "para": "Upper lip threading"
//                 },
//                 {
//                   "id": "3",
//                   "para": "Full Arms(Including Underarms) (Chocolate Roll-on)"
//                 },
//                 {
//                   "id": "4",
//                   "para": "Eyebrow threading"
//                 },
//                 {
//                   "id": "5",
//                   "para": "Fack & neck detan"
//                 },
//                 {
//                   "id": "6",
//                   "para": "Head massage (20 min)"
//                 }
//               ]
//             },
//             {
//               "id": "4",
//               "title": "Make your own package",
//               "price": "₹1850",
//               "time": "2 hr 50 mins",
//               "para": [
//                 {
//                   "id": "1",
//                   "para": "Sara fruit cleanup"
//                 },
//                 {
//                   "id": "2",
//                   "para": "Upper lip threading"
//                 },
//                 {
//                   "id": "3",
//                   "para": "Cut,file & polish-feet"
//                 },
//                 {
//                   "id": "4",
//                   "para": "Eyebrow threading"
//                 },
//                 {
//                   "id": "5",
//                   "para": "Fack & neck detan"
//                 },
//                 {
//                   "id": "6",
//                   "para": "Head massage (20 min)"
//                 },
//                 {
//                   "id": "7",
//                   "para": "Full Arms + Underarms Honey"
//                 },
//                 {
//                   "id": "8",
//                   "para": "Full legs Honey"
//                 }
//               ]
//             },
//             {
//               "id": "5",
//               "title": "Complete honey waxing",
//               "price": "₹399",
//               "time": "1 hr 10 mins",
//               "para": [
//                 {
//                   "id": "1",
//                   "para": "Full legs honey"
//                 },
//                 {
//                   "id": "2",
//                   "para": "Honey Full arms + underarms"
//                 },
//                 {
//                   "id": "3",
//                   "para": "Upper lip threading"
//                 },
//                 {
//                   "id": "4",
//                   "para": "Eyebrow threading"
//                 }
//               ]
//             }
//           ],
//           "packages_components2": [
//             {
//               "id": "1",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657100967218-f08380.png",
//               "title": "Full body",
//               "price": "₹1399",
//               "para": [
//                 {
//                   "id": "1",
//                   "para": "O3+ shine & glow facial"
//                 },
//                 {
//                   "id": "2",
//                   "para": "Upper lip threading"
//                 }
//               ]
//             },
//             {
//               "id": "2",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657100955968-c5b3f1.png",
//               "title": "Stomach",
//               "price": "₹299",
//               "para": [
//                 {
//                   "id": "1",
//                   "para": "Covers the area from below bust to pelvis"
//                 }
//               ]
//             },
//             {
//               "id": "3",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657100969960-ef6f74.png",
//               "title": "Fruit cleanup",
//               "price": " Starts at ₹699",
//               "time": "2 hrs 20 mins",
//               "para": [
//                 {
//                   "id": "1",
//                   "para": "O3+ shine & glow facial"
//                 },
//                 {
//                   "id": "2",
//                   "para": "Upper lip threading"
//                 }
//               ]
//             },
//             {
//               "id": "4",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1634707058605-fd6260.png",
//               "title": "Glow Facial",
//               "price": " Starts at ₹1099",
//               "para": [
//                 {
//                   "id": "1",
//                   "para": "O3+ shine & glow facial"
//                 },
//                 {
//                   "id": "2",
//                   "para": "Upper lip threading"
//                 }
//               ]
//             },
//             {
//               "id": "5",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657015111280-ecba9e.png",
//               "title": "Cut, file & polish(hands)",
//               "price": "₹199",
//               "time": "15 mins",
//               "para": [
//                 {
//                   "id": "1",
//                   "para": "Quick & basic nail grooming session with a wide range of nail polishes"
//                 }
//               ]
//             },
//             {
//               "id": "6",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657525354775-6f2f1b.png",
//               "title": "Elysian British rose mainicure",
//               "price": "₹649",
//               "time": "45 mins",
//               "para": [
//                 {
//                   "id": "1",
//                   "para": "Rose salt soak,scrub,cream massage, mask for soft & nourished hands"
//                 }
//               ]
//             },
//             {
//               "id": "7",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657018447765-ef2c1f.png",
//               "title": "Cut, file & polish(feet)",
//               "price": "₹199",
//               "time": "15 mins",
//               "para": [
//                 {
//                   "id": "1",
//                   "para": "Quick & basic nail grooming session with a wide range of nail polishes"
//                 }
//               ]
//             },
//             {
//               "id": "8",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657525354775-6f2f1b.png",
//               "title": "Elysian British rose mainicure",
//               "price": "₹849",
//               "time": "1 hr 5 mins",
//               "para": [
//                 {
//                   "id": "1",
//                   "para1": "Rose salt soak,scrub,cream massage, mask for soft & nourished feet"
//                 }
//               ]
//             },
//             {
//               "id": "9",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657523964352-5dd593.png",
//               "title": "Face wax",
//               "price": "Starts at ₹69",
//               "para": [
//                 {
//                   "id": "1",
//                   "para": "O3+ shine & glow facial"
//                 },
//                 {
//                   "id": "2",
//                   "para": "Upper lip threading"
//                 }
//               ]
//             },
//             {
//               "id": "10",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657524490060-23016c.png",
//               "title": "Threading",
//               "price": " Starts at ₹19",
//               "para": [
//                 {
//                   "id": "1",
//                   "para1": "Good quality thread for desired eyebrow shape & other facial areas hair removal"
//                 }
//               ]
//             },
//             {
//               "id": "11",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657523167667-d1f1eb.png",
//               "title": "Detan",
//               "price": "Starts at ₹349",
//               "para": [
//                 {
//                   "id": "1",
//                   "para1": "RAAGA detan pack infused with milk,honey, fruit extracts to remove tan"
//                 }
//               ]
//             },
//             {
//               "id": "12",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657520810954-691bb1.png",
//               "title": "Bleach",
//               "price": "Starts at ₹299",
//               "para": [
//                 {
//                   "id": "1",
//                   "para": "O3+ shine & glow facial"
//                 },
//                 {
//                   "id": "2",
//                   "para": "Upper lip threading"
//                 }
//               ]
//             },
//             {
//               "id": "13",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657524726085-34bdda.png",
//               "title": "Hair colour application",
//               "price": "Starts at ₹249",
//               "para": [
//                 {
//                   "id": "1",
//                   "para": "O3+ shine & glow facial"
//                 },
//                 {
//                   "id": "2",
//                   "para": "Upper lip threading"
//                 }
//               ]
//             },
//             {
//               "id": "14",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657524725157-0eea37.png",
//               "title": "Head massage",
//               "price": "₹299",
//               "time": "20 mins",
//               "para": [
//                 {
//                   "id": "1",
//                   "para1": "Relaxing oil massage to relieve stress & promote hair growth"
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     }
//   ],
//   "cart": [
//     {
//       "title": "Full body",
//       "price": "₹1399",
//       "para": [
//         {
//           "id": "1",
//           "para": "O3+ shine & glow facial"
//         },
//         {
//           "id": "2",
//           "para": "Upper lip threading"
//         }
//       ],
//       "id": "1",
//       "count": 1
//     }
//   ]
// }





//  export const CategoryItems = ({ img, para }) => {

//   return <div  >
//     <div>
//       <img width={"100px"} src={img} />
//       <p>{para}</p>
//     </div>

//   </div>
// }





// export const ProductItems = ({ id, title, price, time, para, type, guide_Img, img }) => {

//   // if (type == "guide") {
//   //   // console.log(type)
//   //   return (
//   //     <div>
//   //       <img src={guide_Img} alt="pic" />
//   //     </div>


//   //   )
//   // }


//   if (time) {
//     // console.log(type)
//     return (
//       <div>
//         <div>
//           <h3>{title}</h3>
//           <p>{price} <li>{time}</li></p>
//           <hr />
//           {para?.map((el) => <li key={el.id}>{el.para}</li>)}
//           <button>Edit your package</button>
//         </div>
//         <div>
//           <div>
//           <button>Add</button>
//           </div>
         
//         </div>
//       </div>



//     )
//   }

//   if (!time&&!guide_Img&&!type) {
//     // console.log(type)
//     return (
//       <div style={{display:"flex"}} >
//          <div >
//         <h3>{title}</h3>
//         <p>star</p>
//         <p>{price}</p>
//         <hr />
//         {para?.map((el)=><li key={el.id}>{el.para}</li>)}
//         <button>View details</button>
//       </div>
//         <div>
//           <div>

//           <img width={"100%"} src={img} alt="img" />
//           </div>

//           <button>Add</button>
//         </div>
//       </div>



//     )
//   }

// }

const products = {
  id: 1,
  "SalonForWomen": {
    head: "Salon Prime",
    video: "",
    categories: [
      {
        Ctg_Img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1666706468749-ac6e3f.jpeg",
        Ctg_title: "Bestseller Packages"
      },
      {
        Ctg_Img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1666706468749-ac6e3f.jpeg",
        Ctg_title: "Bestseller Packages"
      },
      {
        Ctg_Img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1666706468749-ac6e3f.jpeg",
        Ctg_title: "Bestseller Packages"
      },
      {
        Ctg_Img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1666706468749-ac6e3f.jpeg",
        Ctg_title: "Bestseller Packages"
      },
      {
        Ctg_Img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1666706468749-ac6e3f.jpeg",
        Ctg_title: "Bestseller Packages"
      },
      {
        Ctg_Img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1666706468749-ac6e3f.jpeg",
        Ctg_title: "Bestseller Packages"
      },
      {
        Ctg_Img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1666706468749-ac6e3f.jpeg",
        Ctg_title: "Bestseller Packages"
      },

    ],
    productList: [
      {
        type: "norm"
        ,
        title: "Style & Trim"
      },
      {
        type: "guide"
        ,
        guide_Img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_600,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/partner-app-supply/1668503062279-01ca1a.jpeg"
      }
    ]
  },
  "SalonForMen": {
    head: "Salon Prime For Men",
    video: "link",
    categories: [
      {
        "id": "1",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1635313403372-16db5c.png",
        "para": "BestSeller Packages"
      },
      {
        "id": "2",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1635313403372-16db5c.png",
        "para": "Make your Packages"
      },
      {
        "id": "3",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1655977998579-8de14b.png",
        "para": "Waxing"
      },
      {
        "id": "4",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1655287480435-d29c6c.png",
        "para": "Facial & cleanup"
      },
      {
        "id": "5",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1655287465245-e4dca0.png",
        "para": "Manicure"
      },
      {
        "id": "6",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1655287464682-7ab5c1.png",
        "para": "Pedicure"
      },
      {
        "id": "7",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1655287464206-1f4ad4.png",
        "para": "Threading & face wax"
      },
      {
        "id": "8",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1655287480991-344026.png",
        "para": "Bleach & detan"
      },
      {
        "id": "9",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1655287475795-1630ef.png",
        "para": "Hair Colour & care"
      }

    ],
    productList: [
      {
        type: "norm"
        ,
        title: "Style & Trim"
      },
      {
        type: "guide"
        ,
        guide_Img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_600,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/partner-app-supply/1668503062279-01ca1a.jpeg"
      },
      {
        type: "norm"
        ,
        title: "Style & Trim"
      },
      {
        type: "guide"
        ,
        guide_Img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_600,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/partner-app-supply/1668503062279-01ca1a.jpeg"
      },
      {
        "id": "1",
        "title": "Full chocolate | chocolate roll-on wacxing",
        "price": "₹849",
        "time": "1 hr 5 mins",
        "para": [
          {
            "id": "1",
            "para": "Eyebrow threading"
          },
          {
            "id": "2",
            "para": "Chocolate full arms, underarms, full legs"
          },
          {
            "id": "3",
            "para": "Upper lip threading"
          }
        ]
      },
      {
        "id": "2",
        "title": "Glow getter",
        "price": "₹1619",
        "time": "1 hr 25 mins",
        "para": [
          {
            "id": "1",
            "para": "O3+ shine & glow facial"
          },
          {
            "id": "2",
            "para": "Upper lip threading"
          }
        ]
      },
      {
        "id": "3",
        "title": "Make your own package-roll on special",
        "price": "₹1284",
        "time": "1 hr 50 mins",
        "para": [
          {
            "id": "1",
            "para": "Full Legs (No Bikini/Brazilian) (Chocolate Roll-on)"
          },
          {
            "id": "2",
            "para": "Upper lip threading"
          },
          {
            "id": "3",
            "para": "Full Arms(Including Underarms) (Chocolate Roll-on)"
          },
          {
            "id": "4",
            "para": "Eyebrow threading"
          },
          {
            "id": "5",
            "para": "Fack & neck detan"
          },
          {
            "id": "6",
            "para": "Head massage (20 min)"
          }
        ]
      },
      {
        "id": "4",
        "title": "Make your own package",
        "price": "₹1850",
        "time": "2 hr 50 mins",
        "para": [
          {
            "id": "1",
            "para": "Sara fruit cleanup"
          },
          {
            "id": "2",
            "para": "Upper lip threading"
          },
          {
            "id": "3",
            "para": "Cut,file & polish-feet"
          },
          {
            "id": "4",
            "para": "Eyebrow threading"
          },
          {
            "id": "5",
            "para": "Fack & neck detan"
          },
          {
            "id": "6",
            "para": "Head massage (20 min)"
          },
          {
            "id": "7",
            "para": "Full Arms + Underarms Honey"
          },
          {
            "id": "8",
            "para": "Full legs Honey"
          }
        ]
      },
      {
        "id": "5",
        "title": "Complete honey waxing",
        "price": "₹399",
        "time": "1 hr 10 mins",
        "para": [
          {
            "id": "1",
            "para": "Full legs honey"
          },
          {
            "id": "2",
            "para": "Honey Full arms + underarms"
          },
          {
            "id": "3",
            "para": "Upper lip threading"
          },
          {
            "id": "4",
            "para": "Eyebrow threading"
          }
        ]
      },
      {
        "id": "1",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657100967218-f08380.png",
        "title": "Full body",
        "price": "₹1399",
        "para": [
          {
            "id": "1",
            "para": "O3+ shine & glow facial"
          },
          {
            "id": "2",
            "para": "Upper lip threading"
          }
        ]
      },
      {
        "id": "2",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657100955968-c5b3f1.png",
        "title": "Stomach",
        "price": "₹299",
        "para": [
          {
            "id": "1",
            "para": "Covers the area from below bust to pelvis"
          }
        ]
      },
      {
        "id": "3",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657100969960-ef6f74.png",
        "title": "Fruit cleanup",
        "price": " Starts at ₹699",
        "time": "2 hrs 20 mins",
        "para": [
          {
            "id": "1",
            "para": "O3+ shine & glow facial"
          },
          {
            "id": "2",
            "para": "Upper lip threading"
          }
        ]
      },
      {
        "id": "4",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/supply/customer-app-supply/1634707058605-fd6260.png",
        "title": "Glow Facial",
        "price": " Starts at ₹1099",
        "para": [
          {
            "id": "1",
            "para": "O3+ shine & glow facial"
          },
          {
            "id": "2",
            "para": "Upper lip threading"
          }
        ]
      },
      {
        "id": "5",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657015111280-ecba9e.png",
        "title": "Cut, file & polish(hands)",
        "price": "₹199",
        "time": "15 mins",
        "para": [
          {
            "id": "1",
            "para": "Quick & basic nail grooming session with a wide range of nail polishes"
          }
        ]
      },
      {
        "id": "6",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657525354775-6f2f1b.png",
        "title": "Elysian British rose mainicure",
        "price": "₹649",
        "time": "45 mins",
        "para": [
          {
            "id": "1",
            "para": "Rose salt soak,scrub,cream massage, mask for soft & nourished hands"
          }
        ]
      },
      {
        "id": "7",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657018447765-ef2c1f.png",
        "title": "Cut, file & polish(feet)",
        "price": "₹199",
        "time": "15 mins",
        "para": [
          {
            "id": "1",
            "para": "Quick & basic nail grooming session with a wide range of nail polishes"
          }
        ]
      },
      {
        "id": "8",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657525354775-6f2f1b.png",
        "title": "Elysian British rose mainicure",
        "price": "₹849",
        "time": "1 hr 5 mins",
        "para": [
          {
            "id": "1",
            "para1": "Rose salt soak,scrub,cream massage, mask for soft & nourished feet"
          }
        ]
      },
      {
        "id": "9",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657523964352-5dd593.png",
        "title": "Face wax",
        "price": "Starts at ₹69",
        "para": [
          {
            "id": "1",
            "para": "O3+ shine & glow facial"
          },
          {
            "id": "2",
            "para": "Upper lip threading"
          }
        ]
      },
      {
        "id": "10",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657524490060-23016c.png",
        "title": "Threading",
        "price": " Starts at ₹19",
        "para": [
          {
            "id": "1",
            "para1": "Good quality thread for desired eyebrow shape & other facial areas hair removal"
          }
        ]
      },
      {
        "id": "11",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657523167667-d1f1eb.png",
        "title": "Detan",
        "price": "Starts at ₹349",
        "para": [
          {
            "id": "1",
            "para1": "RAAGA detan pack infused with milk,honey, fruit extracts to remove tan"
          }
        ]
      },
      {
        "id": "12",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657520810954-691bb1.png",
        "title": "Bleach",
        "price": "Starts at ₹299",
        "para": [
          {
            "id": "1",
            "para": "O3+ shine & glow facial"
          },
          {
            "id": "2",
            "para": "Upper lip threading"
          }
        ]
      },
      {
        "id": "13",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657524726085-34bdda.png",
        "title": "Hair colour application",
        "price": "Starts at ₹249",
        "para": [
          {
            "id": "1",
            "para": "O3+ shine & glow facial"
          },
          {
            "id": "2",
            "para": "Upper lip threading"
          }
        ]
      },
      {
        "id": "14",
        "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657524725157-0eea37.png",
        "title": "Head massage",
        "price": "₹299",
        "time": "20 mins",
        "para": [
          {
            "id": "1",
            "para1": "Relaxing oil massage to relieve stress & promote hair growth"
          }
        ]
      }





    ]
  }
}


// const  productPage:{
//   SalonForWomen:{
//       Head:"Salon Prime",
//       Video:"https://youtu.be/UwI71cKFR6g",
//       categories:[
//           {
//               Ctg-Img:"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1666706468749-ac6e3f.jpeg",
//               Ctg-title:"Bestseller Packages"
//           },
//           {
//               "Ctg-Img":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1635313403372-16db5c.png",
//               "Ctg-title":"Make your own package"
//           },
//           {
//               "Ctg-Img":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1655977998579-8de14b.png",
//               "Ctg-title":"Waxing"
//           },
//           {
//               "Ctg-Img":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287480435-d29c6c.png",
//               "Ctg-title":"Facial & cleanup"
//           },
//           {
//               "Ctg-Img":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287480435-d29c6c.png",
//               "Ctg-title":"Manicure"
//           },
//           {
//               "Ctg-Img":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287480435-d29c6c.png",
//               "Ctg-title":"Pedicure"
//           },
//           {
//               "Ctg-Img":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287480435-d29c6c.png",
//               "Ctg-title":"Threading & face wax"
//           },
//           {
//               "Ctg-Img":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287480435-d29c6c.png",
//               "Ctg-title":"Bleach & detan"
//           },
//           {
//               "Ctg-Img":"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287480435-d29c6c.png",
//               "Ctg-title":"Hair care"
//           }
//       ]
//   }
// }


let currentPage = "SalonForMen"


const Product = () => {
  return <Box>
    <div style={{width:"100%", border: "1px solid red", display: "flex", justifyContent: "space-evenly",flexWrap:"wrap" }}>
     
      <h1>{products[currentPage].head}</h1>

      {/* <iframe width="50%" height="313" src="https://www.youtube.com/embed/UwI71cKFR6g"
        // title="Urban Company | Introducing Roll-on Waxing ft. Yami Gautam| Salon at Home"
        
        // contentEditable="false"
       
        // frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe> */}

      {/* <AspectRatio ratio={16 / 9} > */}
      <iframe
        style={{ borderRadius: '10px' }}
        title='naruto'
        width={"350px"}
        height="250px"
        src="https://www.youtube.com/embed/UwI71cKFR6g"

      />
    
      {/* </AspectRatio> */}
    </div>

    <Box display={"flex"} justifyContent="space-evenly">
      {products[currentPage].categories?.map((el, i) => <CategoryItems key={i} {...el} />)}
    </Box>
    <div>
      {
        // products[currentPage].productList.map((el, i) => <ProductItems key={i} {...el} />)
        products[currentPage].productList.map((el, i) => <ScrollingExample key={i} {...el} />)
      }
    </div>
  </Box>;
};

export default Product;




