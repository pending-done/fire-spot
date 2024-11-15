"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HeaderAuth from "./HeaderAuth";
import SearchBar from "../../search/searchBar/SearchBar";
import { TAGS } from "@/_utils/common/constant";
import { SERVER_PAGE_URL } from "@/_utils/common/constant";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { useDropdownStore } from "@/_utils/zustand/dropdown-provider";

const Header = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const pathname = usePathname();

  const activeDropdown = useDropdownStore((state) => state.activeDropdown);
  const setActiveDropdown = useDropdownStore(
    (state) => state.setActiveDropdown
  );

  const toggleMobileMenu = () => {
    setActiveDropdown(activeDropdown === "mobile" ? null : "mobile");
  };

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowTags(scrollPosition > 260);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 검색창 표시 로직
  useEffect(() => {
    const isMainPage = pathname === "/";
    const isSearchPage = pathname === "/search";

    if (isSearchPage) {
      setShowSearch(false);
      return;
    }

    if (!isMainPage) {
      setShowSearch(true);
      return;
    }

    const handleScroll = () => {
      setShowSearch(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header className="fixed left-0 right-0 top-0 z-[110] bg-white shadow-md">
      <div className="relative mx-auto max-w-[1540px] bg-white p-3 md:p-5">
        {/* 메인 헤더 */}
        <div className="z-10 flex items-center justify-between gap-9 leading-40">
          {/* 로고 + 검색 영역 */}
          <div className="flex w-[530px] items-center gap-[50px]">
            <Link href={"/"} className="w-[150px]">
              <img
                src="/assets/images/logo.svg"
                alt="logo"
                className="w-[150px]"
              />
              <p className="sr-only">로고</p>
            </Link>
            {/* PC 검색바  */}
            <div
              className={`block w-full max-w-[473px] transition-all duration-300 max-600:hidden ${
                showSearch
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-2 opacity-0"
              }`}
            >
              <SearchBar variant="header" />
            </div>
          </div>
          {/* PC 메뉴 */}
          <nav className="hidden gap-5 text-lg font-semibold lg:flex">
            <Link href={"/beginner"}>캠핑가이드</Link>
            <Link href={"/camps"}>캠핑장</Link>
            <Link href={SERVER_PAGE_URL.meets}>커뮤니티</Link>
          </nav>

          {/* 아이콘 영역 */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex">
              <Link href={"/search"} className="header_icon bg-map"></Link>
              <Link
                href={`${SERVER_PAGE_URL.chat}`}
                className="header_icon bg-chat"
              ></Link>
              <Link href={"/sos"} className="header_icon bg-sos"></Link>
            </div>
            <HeaderAuth />

            {/* 모바일 메뉴 버튼 */}
            <button className="ml-2 lg:hidden" onClick={toggleMobileMenu}>
              {activeDropdown === "mobile" ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* 모바일 검색바 */}
        <div className="mt-2 hidden max-600:block">
          <SearchBar variant="header" />
        </div>

        {/* 모바일 메뉴 */}
        {activeDropdown === "mobile" && (
          <MobileMenu
            showSubmenu={showSubmenu}
            setShowSubmenu={setShowSubmenu}
          />
        )}

        {/* 태그 박스 */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            showTags ? "mt-4 h-[20px] opacity-100" : "h-0 opacity-0"
          }`}
        >
          <div className="flex flex-wrap items-center gap-3 px-4 text-[#9A9696] md:gap-5 md:pl-[160px]">
            {TAGS.map((tag) => (
              <Link key={tag.name} href={tag.href}>
                {tag.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
