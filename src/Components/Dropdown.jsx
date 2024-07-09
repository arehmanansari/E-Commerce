import React, { useState } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";

export const ShopDropdown = () => {
  
  return (
    <div>
      <details>
        <summary>Shop</summary>
        <ul className="ul-list">
          <li>Shop Grid - Right Sidebar</li>
          <li>Shop Grid - Left Sidebar</li>
          <li>Shop List - Right Sidebar</li>
          <li>Shop List - Left Sidebar</li>
          <li> Shop - Wide</li>
          <li>Single Product</li>
          <li>Shop - Filter</li>
          <li>Shop - WishList</li>
          <li>Shop - Cart</li>
          <li>Shop - Checkout</li>
          <li>Shop - Compare</li>
          <li>Shop Invoice</li>
        </ul>
      </details>
    </div>
  );
};

export const VendorsDropdown = () => {
  return (
    <div>
      <details>
        <summary>Vendors</summary>
        <ul>
          <li>Vendors Grid</li>
          <li>Vendors List</li>
          <li>Vendors Details 01</li>
          <li>Vendors Details 02</li>
          <li>Vendors Dashboard</li>
          <li>Vendors Guide</li>
        </ul>
      </details>
    </div>
  );
};

export const MegaMenuDropdown = () => {
  return (
    <div>
      <details>
        <summary>Mega Menu</summary>
        <div className="megamenu">
          <ul>
            <li>Fruits & Vegetables</li>
            <li>BreakFast & Dairy</li>
            <li>Meat & SeaFood</li>
            <li>Meat & Poultry</li>
            <li>Fresh Vegetabeles</li>
            <li>Herbs & Spices</li>
            <li>Cuts & Sprouts</li>
            <li>Exotic Fruit & Veggies</li>
            <li>Pacakaged Prouce</li>
          </ul>
          <ul>
            <li>Cheese</li>
            <li>Milk & Flavoured Milk</li>
            <li>Butter & Margarine</li>
            <li>Eggs Substitute</li>
            <li>Marmaldes</li>
            <li>Sour Cream</li>
          </ul>
          <ul>
            <li>BreakFast Sausages</li>
            <li>Dinner Sausages</li>
            <li>Chicken</li>
            <li>Sliced Deli Meat</li>
            <li>Wild Caught Fillets</li>
            <li>Crabs & ShellFish</li>
          </ul>
        </div>
      </details>
    </div>
  );
};

export const BrowseAllCategoriesDropdown = () => {
  return (
    <div>
      <CDropdown>
        <CDropdownToggle href="#" color="primary">
          Browse All Categories
        </CDropdownToggle>
        <CDropdownMenu></CDropdownMenu>
      </CDropdown>
    </div>
  );
};

export const CurrencyDropdown = () => {
  const [currency, setCurrency] = useState("USD");

  return (
    <div>
      <CDropdown>
        <CDropdownToggle href="#" color="primary">
          Select Currency
        </CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem
            active={currency === "USD"}
            onClick={() => setCurrency("USD")}
          >
            United States - USD
          </CDropdownItem>
          <CDropdownItem
            active={currency === "EUR"}
            onClick={() => setCurrency("EUR")}
          >
            Germany - EUR
          </CDropdownItem>
          <CDropdownItem
            active={currency === "GBP"}
            onClick={() => setCurrency("GBP")}
          >
            United Kingdom - GBP
          </CDropdownItem>
          <CDropdownItem
            active={currency === "JPY"}
            onClick={() => setCurrency("JPY")}
          >
            Japan - JPY
          </CDropdownItem>
          <CDropdownItem
            active={currency === "RUB"}
            onClick={() => setCurrency("RUB")}
          >
            Russia - RUB
          </CDropdownItem>
          <CDropdownItem
            active={currency === "PKR"}
            onClick={() => setCurrency("PKR")}
          >
            Pakistan - PKR
          </CDropdownItem>
          <CDropdownItem
            active={currency === "PLN"}
            onClick={() => setCurrency("PLN")}
          >
            Poland - PLN
          </CDropdownItem>
          <CDropdownItem
            active={currency === "INR"}
            onClick={() => setCurrency("INR")}
          >
            India - INR
          </CDropdownItem>
          <CDropdownItem
            active={currency === "KRW"}
            onClick={() => setCurrency("KRW")}
          >
            Korea - KRW
          </CDropdownItem>
          <CDropdownItem
            active={currency === "VND"}
            onClick={() => setCurrency("VND")}
          >
            Vietnam - VND
          </CDropdownItem>
          <CDropdownItem
            active={currency === "SAR"}
            onClick={() => setCurrency("SAR")}
          >
            Saudi Arabia - SAR
          </CDropdownItem>
          <CDropdownItem
            active={currency === "TRY"}
            onClick={() => setCurrency("TRY")}
          >
            Turkey - TRY
          </CDropdownItem>
          <CDropdownItem
            active={currency === "IDR"}
            onClick={() => setCurrency("IDR")}
          >
            Indonesia - IDR
          </CDropdownItem>
          <CDropdownItem
            active={currency === "THB"}
            onClick={() => setCurrency("THB")}
          >
            Thailand - THB
          </CDropdownItem>
          <CDropdownItem
            active={currency === "HUF"}
            onClick={() => setCurrency("HUF")}
          >
            Hungary - HUF
          </CDropdownItem>
          <CDropdownItem
            active={currency === "KZT"}
            onClick={() => setCurrency("KZT")}
          >
            Kazakhstan - KZT
          </CDropdownItem>
          <CDropdownItem
            active={currency === "PHP"}
            onClick={() => setCurrency("PHP")}
          >
            Philippines - PHP
          </CDropdownItem>
          <CDropdownItem
            active={currency === "MYR"}
            onClick={() => setCurrency("MYR")}
          >
            Malaysia - MYR
          </CDropdownItem>
          <CDropdownItem
            active={currency === "NOK"}
            onClick={() => setCurrency("NOK")}
          >
            Norway - NOK
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </div>
  );
};

export const LanguageDropdown = () => {
  const [language, setLanguage] = useState("en-us");

  return (
    <div>
      <CDropdown>
        <CDropdownToggle href="#" color="primary">
          Select Language
        </CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem
            active={language === "en-us"}
            onClick={() => setLanguage("en-us")}
          >
            English - US
          </CDropdownItem>
          <CDropdownItem
            active={language === "fr-fr"}
            onClick={() => setLanguage("fr-fr")}
          >
            French - France
          </CDropdownItem>
          <CDropdownItem
            active={language === "cn-zh"}
            onClick={() => setLanguage("cn-zh")}
          >
            Spanish - Spain
          </CDropdownItem>
          <CDropdownItem
            active={language === "pt-por"}
            onClick={() => setLanguage("pt-por")}
          >
            Portuguese - Portugal
          </CDropdownItem>
          <CDropdownItem
            active={language === "de-de"}
            onClick={() => setLanguage("de-de")}
          >
            German - Germany
          </CDropdownItem>
          <CDropdownItem
            active={language === "it-it"}
            onClick={() => setLanguage("it-it")}
          >
            Italian - Italy
          </CDropdownItem>
          <CDropdownItem
            active={language === "ja-jp"}
            onClick={() => setLanguage("ja-jp")}
          >
            Japanese - Japan
          </CDropdownItem>
          <CDropdownItem
            active={language === "rus-ru"}
            onClick={() => setLanguage("rus-ru")}
          >
            Russian - Russia
          </CDropdownItem>
          <CDropdownItem
            active={language === "pk-ur"}
            onClick={() => setLanguage("pk-ur")}
          >
            Urdu - Pakistan
          </CDropdownItem>
          <CDropdownItem
            active={language === "pl-pol"}
            onClick={() => setLanguage("pl-pol")}
          >
            Polish - Poland
          </CDropdownItem>
          <CDropdownItem
            active={language === "in-hi"}
            onClick={() => setLanguage("in-hi")}
          >
            Spanish - Spain
          </CDropdownItem>
          <CDropdownItem
            active={language === "kr-ko"}
            onClick={() => setLanguage("kr-ko")}
          >
            Korean - Korea
          </CDropdownItem>
          <CDropdownItem
            active={language === "vn-vt"}
            onClick={() => setLanguage("vn-vt")}
          >
            Vietnamese - Veitnam
          </CDropdownItem>
          <CDropdownItem
            active={language === "sa-ar"}
            onClick={() => setLanguage("sa-ar")}
          >
            Arabic - Saudi Arabia
          </CDropdownItem>
          <CDropdownItem
            active={language === "tr-tur"}
            onClick={() => setLanguage("tr-tur")}
          >
            Turkish - Turkey
          </CDropdownItem>
          <CDropdownItem
            active={language === "id-in"}
            onClick={() => setLanguage("id-in")}
          >
            Indonesian - Indonesia
          </CDropdownItem>
          <CDropdownItem
            active={language === "th-th"}
            onClick={() => setLanguage("th-th")}
          >
            Thai - Thailand
          </CDropdownItem>
          <CDropdownItem
            active={language === "hu-hu"}
            onClick={() => setLanguage("hu-hu")}
          >
            Hungarian - Hungary
          </CDropdownItem>
          <CDropdownItem
            active={language === "kz-kk"}
            onClick={() => setLanguage("kz-kk")}
          >
            Kazakh - Kazakhstan
          </CDropdownItem>
          <CDropdownItem
            active={language === "ph-fil"}
            onClick={() => setLanguage("ph-fil")}
          >
            Filipino - Philippines
          </CDropdownItem>
          <CDropdownItem
            active={language === "no-no"}
            onClick={() => setLanguage("no-no")}
          >
            Norwegian - Norway
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </div>
  );
};

export const LocationDropdown = () => {
  const [location, setLocation] = useState();
  return (
    <div>
      <CDropdown>
        <CDropdownToggle href="#" color="primary">
          Select Location
        </CDropdownToggle>
        <CDropdownMenu scroll={true}>
          <CDropdownItem
            active={location === "karachi-sindh"}
            onClick={() => setLocation("karachi-sindh")}
          >
            Karachi - Sindh
          </CDropdownItem>
          <CDropdownItem
            active={location === "hyderabad-sindh"}
            onClick={() => setLocation("hyderabad-sindh")}
          >
            Hyderabad - Sindh
          </CDropdownItem>
          <CDropdownItem
            active={location === "mirpurkhas-sindh"}
            onClick={() => setLocation("mirpurkhas-sindh")}
          >
            Mirpur Khas - Sindh
          </CDropdownItem>
          <CDropdownItem
            active={location === "sukkur-sindh"}
            onClick={() => setLocation("sukkur-sindh")}
          >
            Sukkur - Sindh
          </CDropdownItem>
          <CDropdownItem
            active={location === "larkana-sindh"}
            onClick={() => setLocation("larkana-sindh")}
          >
            Larkana - Sindh
          </CDropdownItem>
          <CDropdownItem
            active={location === "nawabshah-sindh"}
            onClick={() => setLocation("nawabshah-sindh")}
          >
            Nawabshah - Sindh
          </CDropdownItem>
          <CDropdownItem
            active={location === "islamabad-punjab"}
            onClick={() => setLocation("islamabad-punjab")}
          >
            Islamabad - Punjab
          </CDropdownItem>
          <CDropdownItem
            active={location === "lahore-punjab"}
            onClick={() => setLocation("lahore-punjab")}
          >
            Lahore - Punjab
          </CDropdownItem>
          <CDropdownItem
            active={location === "faisalabad-punjab"}
            onClick={() => setLocation("faisalabad-punjab")}
          >
            Faisalabad - Punjab
          </CDropdownItem>
          <CDropdownItem
            active={location === "multan-punjab"}
            onClick={() => setLocation("multan-punjab")}
          >
            Multan - Punjab
          </CDropdownItem>
          <CDropdownItem
            active={location === "rawalpindi-punjab"}
            onClick={() => setLocation("rawalpindi-punjab")}
          >
            Rawalpindi - Punjab
          </CDropdownItem>
          <CDropdownItem
            active={location === "guranwala-punjab"}
            onClick={() => setLocation("guranwala-punjab")}
          >
            Guranwala - Punjab
          </CDropdownItem>
          <CDropdownItem
            active={location === "sarghoda-punjab"}
            onClick={() => setLocation("sarghoda-punjab")}
          >
            Sarghoda - Punjab
          </CDropdownItem>
          <CDropdownItem
            active={location === "bhawalpur-punjab"}
            onClick={() => setLocation("bhawalpur-punjab")}
          >
            Bhawalpur - Punjab
          </CDropdownItem>
          <CDropdownItem
            active={location === "sialkot-punjab"}
            onClick={() => setLocation("sialkot-punjab")}
          >
            Sialkot - Punjab
          </CDropdownItem>
          <CDropdownItem
            active={location === "deraghazikhan-punjab"}
            onClick={() => setLocation("deraghazikhan-punjab")}
          >
            Dera Ghazi Khan - Punjab
          </CDropdownItem>
          <CDropdownItem
            active={location === "muzzafargarh-punjab"}
            onClick={() => setLocation("muzzafargarh-punjab")}
          >
            Muzzafargarh - Punjab
          </CDropdownItem>
          <CDropdownItem
            active={location === "rahimyarkhan-punjab"}
            onClick={() => setLocation("rahimyarkhan-punjab")}
          >
            Rahim Yar Khan - Punjab
          </CDropdownItem>
          <CDropdownItem
            active={location === "quetta-balochistan"}
            onClick={() => setLocation("quetta-balochistan")}
          >
            Quetta - Balochistan
          </CDropdownItem>
          <CDropdownItem
            active={location === "peshawar-khyberpakhtunkhwa"}
            onClick={() => setLocation("peshawar-khyberpakhtunkhwa")}
          >
            Peshawar - Khyber Pakhtunkhwa
          </CDropdownItem>
          <CDropdownItem
            active={location === "abbotabad-khyberpakhtunkhwa"}
            onClick={() => setLocation("abbotabad-khyberpakhtunkhwa")}
          >
            Abbotabad - Khyber Pakhtunkhwa
          </CDropdownItem>
          <CDropdownItem
            active={location === "mardan-khyberpakhtunkhwa"}
            onClick={() => setLocation("mardan-khyberpakhtunkhwa")}
          >
            Mardan - Khyber Pakhtunkhwa
          </CDropdownItem>
          <CDropdownItem
            active={location === "swat-khyberpakhtunkhwa"}
            onClick={() => setLocation("swat-khyberpakhtunkhwa")}
          >
            Swat - Khyber Pakhtunkhwa
          </CDropdownItem>
          <CDropdownItem
            active={location === "chitral-khyberpakhtunkhwa"}
            onClick={() => setLocation("chitral-khyberpakhtunkhwa")}
          >
            Chitral - Khyber Pakhtunkhwa
          </CDropdownItem>
          <CDropdownItem
            active={location === "gilgit-gilgitbaltistan"}
            onClick={() => setLocation("gilgit-gilgitbaltistan")}
          >
            Gilgit - Gilgit Baltistan
          </CDropdownItem>
          <CDropdownItem
            active={location === "skardu-gilgitbaltistan"}
            onClick={() => setLocation("skardu-gilgitbaltistan")}
          >
            Skardu - Gilgit Baltistan
          </CDropdownItem>
          <CDropdownItem
            active={location === "muzuffarabad-azadkashmir"}
            onClick={() => setLocation("muzuffarabad-azadkashmir")}
          >
            Muzuffarabad - Azad Kashmir
          </CDropdownItem>
          <CDropdownItem
            active={location === "mirpur-azadkashmir"}
            onClick={() => setLocation("mirpur-azadkashmir")}
          >
            Mirpur - Azad Kashmir
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </div>
  );
};
