'use client';

import { Button, Input, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";

// ACME Logo Component
const AcmeIcon = ({ size = 32, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg 
    fill="none" 
    height={size} 
    viewBox="0 0 32 32" 
    width={size} 
    className="text-gray-900 dark:text-white"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ThemeSwitch = () => {
  const themes = [
    { value: "dark", icon: "solar:moon-linear" },
    { value: "light", icon: "solar:sun-2-linear" },
    { value: "system", icon: "solar:monitor-linear" }
  ];

  return (
    <div className="flex gap-2">
      {themes.map((theme) => (
        <button
          key={theme.value}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label={`${theme.value} theme`}
        >
          <Icon icon={theme.icon} width={18} />
        </button>
      ))}
    </div>
  );
};
// Main Footer Component
export default function Footer() {
  const footerNavigation = {
    services: [
      { name: "Branding", href: "#" },
      { name: "Data Analysis", href: "#" },
      { name: "E-commerce Solutions", href: "#" },
      { name: "Market Research", href: "#" },
    ],
    supportOptions: [
      { name: "Pricing Plans", href: "#" },
      { name: "User Guides", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Service Status", href: "#" },
    ],
    aboutUs: [
      { name: "Our Story", href: "#" },
      { name: "Latest News", href: "#" },
      { name: "Career Opportunities", href: "#" },
      { name: "Media Enquiries", href: "#" },
      { name: "Collaborations", href: "#" },
    ],
    legal: [
      { name: "Claim", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
      { name: "User Agreement", href: "#" },
    ],
    social: [
      { name: "Facebook", href: "#", icon: "fontisto:facebook" },
      { name: "Instagram", href: "#", icon: "fontisto:instagram" },
      { name: "Twitter", href: "#", icon: "fontisto:twitter" },
      { name: "GitHub", href: "#", icon: "fontisto:github" },
    ],
  };

  const renderList = (title: string, items: { name: string; href: string }[]) => (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <AcmeIcon size={32} className="text-gray-900 dark:text-white" />
              <span className="text-lg font-medium text-gray-900 dark:text-white">ACME</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Making the world a better place through superior products and services.
            </p>
            <div className="flex gap-4">
              {footerNavigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  aria-label={item.name}
                >
                  <Icon icon={item.icon} width={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>{renderList("Services", footerNavigation.services)}</div>
              <div className="mt-10 md:mt-0">
                {renderList("Support", footerNavigation.supportOptions)}
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>{renderList("About Us", footerNavigation.aboutUs)}</div>
              <div className="mt-10 md:mt-0">
                {renderList("Legal", footerNavigation.legal)}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 rounded-xl bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 lg:mt-20 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="lg:w-1/2">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Get the latest news and updates delivered to your inbox.
            </p>
          </div>
          <form className="mt-4 sm:flex sm:max-w-md lg:mt-0 lg:w-1/2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-r-none"
              aria-label="Email address"
            />
            <Button
              type="submit"
              className="mt-2 sm:mt-0 sm:ml-2"
              color="primary"
            >
              Subscribe
            </Button>
          </form>
        </div>

        {/* Copyright and theme switcher */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} ACME Inc. All rights reserved.
          </p>
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  );
}