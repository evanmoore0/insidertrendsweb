import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import ReactPlayer from 'react-player'

const IndexPage: NextPage = () => {
  return (


    <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: 'center', alignItems: 'center', background: "black" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: 'space-evenly', alignItems: 'center', height: "100%" }}>

        <h1 style={{ color: "white", fontFamily: "monospace" }}>
          Insider Trends
        </h1>

        <Link href={'/privacy-policy'}>

          <h2 style={{color: "white", fontFamily: "monospace", cursor: "pointer"}}>
              Privacy Policy
          </h2>
        </Link>


        <Image
        src = {"/plzwork.png"}
        width= {400}
        height={400}
        />


        <h3 style={{color: "white", fontFamily: "monospace"}}>
          Contact: willowickventures@gmail.com
        </h3>

      </div>
    </div>







  )
}

export default IndexPage


{/* // <Layout title="Bearshirt">
    //   <ul className="card-list">
    //     <li>
    //       <Link href="/donate-with-checkout">
    //         <a className="card checkout-style-background">
    //           <h2 className="bottom">Donate with Checkout</h2>
    //           <img src="/checkout-one-time-payments.svg" />
    //         </a>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/donate-with-elements">
    //         <a className="card elements-style-background">
    //           <h2 className="bottom">Donate with Elements</h2>
    //           <img src="/elements-card-payment.svg" />
    //         </a>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/use-shopping-cart">
    //         <a className="card cart-style-background">
    //           <h2 className="bottom">Use Shopping Cart</h2>
    //           <img src="/use-shopping-cart.png" />
    //         </a>
    //       </Link>
    //     </li>
    //   </ul>
    // </Layout> */}