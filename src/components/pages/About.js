import React from 'react'
import '../../App.css'
import './About.css'
import Footer from '../Footer'

export default function Menu() {
    return (
        <div className="about__container">
            <div className="about__wrapper">
                <div className="about__bgimage">
                    <img src="./images/who-we-are.jpg" alt="Indian Spices" className="about-img"/>
                </div> 
                <div className="about__content">
                    <h1 className="about__heading">
                    <i class="fas fa-angle-double-left"></i>
                    <pre> Who We Are </pre>
                    <i class="fas fa-angle-double-right"></i>
                    </h1>
                    <div className="who-we-are">
                        <p className="firstpara">
                            We are a proud family owned homebased business who take pride sharing the taste of their childhood to the community who misses the same. Our goal is to spread these lovely dishes of the street to each and every house of the Ontario!, Quebec!, British Columbia!, Alberta!, Manitoba! and every other state of this beautiful country Canada. Pround to be Indo-Canadian. 
                        </p>
                        <p className="secondpara">
                            We take all the necessary mesaures to serve you the best quality food. We are trying to cut every corners in each possible direction to make the food less expensive but more delicious and healthy. We know how hard your money is, We really do!
                        </p>
                    </div>

                </div> 
            </div>
            
            <Footer />
        </div>

    )
}


// for regular table type menu
// return (
//     <div className="menu--container">
//         <div className="items--container">
//             <h1 className="menu">
//                 <i class="fas fa-angle-double-left"></i>
//                 <pre> MENU </pre>
//                 <i class="fas fa-angle-double-right"></i>
//             </h1>
//             <table>
//                 <thead className="regular-items">
//                     <h2>Regular Items</h2>
//                     <tbody>
//                         <tr>
//                             <th>Dish</th>
//                             <th>Price</th>
//                         </tr>
//                         <tr>
//                             <td>Boiled Eggs (2pcs)</td>
//                             <td>$1</td>
//                         </tr>
//                         <tr>
//                             <td>Omlete</td>
//                             <td>$3</td>
//                         </tr>
//                         <tr>
//                             <td>Lasan Fry</td>
//                             <td>$5</td>
//                         </tr>
//                         <tr>
//                             <td>Tomato Fry</td>
//                             <td>$5</td>
//                         </tr>
//                         <tr>
//                             <td>Bhurji</td>
//                             <td>$8</td>
//                         </tr>
//                         <tr>
//                             <td>Lachko</td>
//                             <td>$10</td>
//                         </tr>
//                         <tr>
//                             <td>Khimo</td>
//                             <td>$10</td>
//                         </tr>
//                         <tr>
//                             <td>Gotalo</td>
//                             <td>$10</td>
//                         </tr>
//                     </tbody>
//                 </thead>
//                 <thead className="speciality-items">
//                     <h2>Speciality Items</h2>
//                     <tbody>
//                         <tr>
//                             <th>Dish</th>
//                             <th>Price</th>
//                         </tr>
//                         <tr>
//                             <td>Australian Fry</td>
//                             <td>$12</td>
//                         </tr>
//                         <tr>
//                             <td>Ravaiya</td>
//                             <td>$12</td>
//                         </tr>
//                         <tr>
//                             <td>Patudi</td>
//                             <td>$12</td>
//                         </tr>
//                         <tr>
//                             <td>Tikhari</td>
//                             <td>$12</td>
//                         </tr>
//                     </tbody>
//                 </thead>
//             </table>
//         </div>
//         <Footer />
//     </div>

// )