/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const asset = (path: string) =>
  `https://themedox.com/demo/eston/${path.replace(/^\/+/, "")}`;

export const metadata: Metadata = {
  title: "Eston – Creative Agency",
  description: "Eston agency landing page cloned for demo purposes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={asset("assets/images/favicons/apple-touch-icon.png")}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={asset("assets/images/favicons/favicon-32x32.png")}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={asset("assets/images/favicons/favicon-16x16.png")}
        />
        <link
          rel="manifest"
          href={asset("assets/images/favicons/site.webmanifest")}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href={asset("assets/vendors/bootstrap/css/bootstrap.min.css")}
        />
        <link
          rel="stylesheet"
          href={asset("assets/vendors/animate/animate.min.css")}
        />
        <link
          rel="stylesheet"
          href={asset("assets/vendors/animate/custom-animate.css")}
        />
        <link
          rel="stylesheet"
          href={asset("assets/vendors/fontawesome/css/all.min.css")}
        />
        <link
          rel="stylesheet"
          href={asset("assets/vendors/jarallax/jarallax.css")}
        />
        <link
          rel="stylesheet"
          href={asset("assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css")}
        />
        <link
          rel="stylesheet"
          href={asset("assets/vendors/odometer/odometer.min.css")}
        />
        <link rel="stylesheet" href={asset("assets/vendors/swiper/swiper.min.css")} />
        <link
          rel="stylesheet"
          href={asset("assets/vendors/eston-icons/style.css")}
        />
        <link
          rel="stylesheet"
          href={asset("assets/vendors/owl-carousel/owl.carousel.min.css")}
        />
        <link
          rel="stylesheet"
          href={asset("assets/vendors/owl-carousel/owl.theme.default.min.css")}
        />
        <link
          rel="stylesheet"
          href={asset("assets/vendors/bootstrap-select/css/bootstrap-select.min.css")}
        />
        <link
          rel="stylesheet"
          href={asset("assets/vendors/jquery-ui/jquery-ui.css")}
        />
        <link rel="stylesheet" href={asset("assets/css/eston.css")} />
        <link rel="stylesheet" href={asset("assets/css/eston-responsive.css")} />
      </head>
      <body>
        {children}
        <Script
          src={asset("assets/vendors/jquery/jquery-3.6.0.min.js")}
          strategy="beforeInteractive"
        />
        <Script
          src={asset("assets/vendors/hover-animated/imagesloaded.pkgd.min.js")}
          strategy="beforeInteractive"
        />
        <Script
          src={asset("assets/vendors/bootstrap/js/bootstrap.bundle.min.js")}
          strategy="beforeInteractive"
        />
        <Script
          src={asset("assets/vendors/jarallax/jarallax.min.js")}
          strategy="beforeInteractive"
        />
        <Script
          src={asset("assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js")}
          strategy="afterInteractive"
        />
        <Script
          src={asset("assets/vendors/jquery-appear/jquery.appear.min.js")}
          strategy="afterInteractive"
        />
        <Script
          src={asset("assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js")}
          strategy="afterInteractive"
        />
        <Script
          src={asset("assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js")}
          strategy="afterInteractive"
        />
        <Script
          src={asset("assets/vendors/jquery-validate/jquery.validate.min.js")}
          strategy="afterInteractive"
        />
        <Script
          src={asset("assets/vendors/odometer/odometer.min.js")}
          strategy="afterInteractive"
        />
        <Script
          src={asset("assets/vendors/swiper/swiper.min.js")}
          strategy="afterInteractive"
        />
        <Script
          src={asset("assets/vendors/wnumb/wNumb.min.js")}
          strategy="afterInteractive"
        />
        <Script src={asset("assets/vendors/wow/wow.js")} strategy="afterInteractive" />
        <Script
          src={asset("assets/vendors/isotope/isotope.js")}
          strategy="afterInteractive"
        />
        <Script
          src={asset("assets/vendors/owl-carousel/owl.carousel.min.js")}
          strategy="afterInteractive"
        />
        <Script
          src={asset("assets/vendors/bootstrap-select/js/bootstrap-select.min.js")}
          strategy="afterInteractive"
        />
        <Script
          src={asset("assets/vendors/jquery-ui/jquery-ui.js")}
          strategy="afterInteractive"
        />
        <Script
          src={asset("assets/vendors/jquery.circle-type/jquery.circleType.js")}
          strategy="afterInteractive"
        />
        <Script
          src={asset("assets/vendors/jquery.circle-type/jquery.lettering.min.js")}
          strategy="afterInteractive"
        />
        <Script
          src={asset("assets/vendors/sidebar-content/jquery-sidebar-content.js")}
          strategy="afterInteractive"
        />
        <Script
          src={asset("assets/vendors/marquee/marquee.min.js")}
          strategy="afterInteractive"
        />
        <Script src={asset("assets/vendors/hover-animated/charming.min.js")} strategy="afterInteractive" />
        <Script src={asset("assets/vendors/hover-animated/demo.js")} strategy="afterInteractive" />
        <Script src={asset("assets/vendors/hover-animated/tweenMax.min.js")} strategy="afterInteractive" />
        <Script src={asset("assets/js/eston.js")} strategy="afterInteractive" />
      </body>
    </html>
  );
}
