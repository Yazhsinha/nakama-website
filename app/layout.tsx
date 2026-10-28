import type { Metadata, Viewport } from "next";
import Script from "next/script";
import {SITE_URL,SITE_DESCRIPTION,organizationLd,websiteLd,JsonLd,FEEDS} from "@/lib/seo";
import "./fonts.css";
import {BookCallModal} from "@/components/booking/BookCall";
import "./globals.css";
import "./midnight.css";
import "./editorial.css";
import "./navigation-glass.css";
import "./homepage-refinement.css";
import "./answer-hero.css";
import "./polish-oct.css";
import "./perf-polish.css";
import "./responsive-touch.css";
import { SiteTheme } from "./theme";
export const metadata: Metadata = {
 metadataBase: new URL(SITE_URL),
 title: {default: "Nakama Growth — Be the brand they already know.", template: "%s — Nakama Growth"},
 description: SITE_DESCRIPTION,
 applicationName: "Nakama Growth",
 alternates: {canonical: "/", types: FEEDS},
 openGraph: {type: "website", siteName: "Nakama Growth", locale: "en_IN", url: "/", title: "Nakama Growth — Be the brand they already know.", description: SITE_DESCRIPTION},
 twitter: {card: "summary_large_image", title: "Nakama Growth — Be the brand they already know.", description: SITE_DESCRIPTION},
 icons: {icon: [{url: "/brand/nakama-favicon.svg", type: "image/svg+xml"}, {url: "/brand/icon-48.png", sizes: "48x48", type: "image/png"}, {url: "/brand/icon-96.png", sizes: "96x96", type: "image/png"}, {url: "/brand/icon-192.png", sizes: "192x192", type: "image/png"}], apple: [{url: "/brand/apple-touch-icon-180.png", sizes: "180x180"}]},
 robots: {index: true, follow: true, googleBot: {index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1}},
 verification: {google: "JMhvuB4Jbw7O0z011S4vD2yakTWoNid99_KNrOmIoGA", other: {"msvalidate.01": "989E14619BFCCB974BD0571A01C36655"}},
 formatDetection: {telephone: false, email: false, address: false},
};
export const viewport: Viewport = {width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0c0b0d", colorScheme: "dark"};
const mixpanelToken = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
const mixpanelBootstrap = `(function(f,b){if(!b.__SV){var e,g,i,h;window.mixpanel=b;b._i=[];b.init=function(e,f,c){function g(a,d){var b=d.split(".");2==b.length&&((a=a[b[0]]),(d=b[1]));a[d]=function(){a.push([d].concat(Array.prototype.slice.call(arguments,0)));};}var a=b;"undefined"!==typeof c?(a=b[c]=[]):(c="mixpanel");a.people=a.people||[];a.toString=function(a){var d="mixpanel";"mixpanel"!==c&&(d+="."+c);a||(d+=" (stub)");return d;};a.people.toString=function(){return a.toString(1)+".people (stub)";};i="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");for(h=0;h<i.length;h++)g(a,i[h]);var j="set set_once union unset remove delete".split(" ");a.get_group=function(){function b(c){d[c]=function(){var args=[c].concat(Array.prototype.slice.call(arguments,0));a.push([e,args]);};}for(var d={},e=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<j.length;c++)b(j[c]);return d;};b._i.push([e,f,c]);};b.__SV=1.2;e=f.createElement("script");e.type="text/javascript";e.async=true;e.src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";g=f.getElementsByTagName("script")[0];g.parentNode.insertBefore(e,g);}})(document,window.mixpanel||[]);mixpanel.init(${JSON.stringify(mixpanelToken)},{autocapture:true,track_pageview:true,record_sessions_percent:100,record_heatmap_data:true});`;
const GA_MEASUREMENT_ID = "G-MD6X61CECS";
const gaEnabled = process.env.VERCEL_ENV === "production";
const gaInit = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","${GA_MEASUREMENT_ID}");`;
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
 return <html lang="en" data-theme="dark" style={{overflowX:"clip"}}><head>{mixpanelToken && <Script id="mixpanel-init" strategy="beforeInteractive">{mixpanelBootstrap}</Script>}</head><body><JsonLd data={[organizationLd,websiteLd]}/><SiteTheme>{children}</SiteTheme><BookCallModal/>{gaEnabled && <><Script id="ga4-src" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive"/><Script id="ga4-init" strategy="afterInteractive">{gaInit}</Script></>}</body></html>;
}