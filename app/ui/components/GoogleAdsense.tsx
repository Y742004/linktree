import Script from "next/script";

export default function GoogleAdsense({ pId }: any) {
  return (
    <div className="pt-5">
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5753990073751364`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      ></Script>
    </div>
  );
}
