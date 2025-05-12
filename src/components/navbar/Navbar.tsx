'use client';
import React, { useState } from 'react';
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Button,
  Input,
  Badge,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { AcmeIcon } from './AcmeIcon';
import NotificationsCard from './NotificationsCard';

export default function Navbar() {
  const [activeApp, setActiveApp] = useState('TestFlight');

  return (
    <NextUINavbar
      classNames={{
        base: "bg-primary",
        wrapper: "px-4 sm:px-6",
        item: "data-[active=true]:text-primary",
      }}
      height="64px"
      isBlurred={false} // This removes the white/blurred background
    >
      <NavbarBrand>
        <NavbarMenuToggle className="mr-2 h-6 sm:hidden" />
        <AcmeIcon />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>

      {/* Apps Navigation */}
      <div className="hidden sm:flex items-center">
        <Button
          variant="light"
          className={`text-primary-foreground/50 hover:text-primary-foreground ${
            activeApp === 'iOS App' ? 'text-primary-foreground font-medium' : ''
          }`}
          onPress={() => setActiveApp('iOS App')}
        >
          iOS App
        </Button>
        <span className="mx-1 text-primary-foreground/50">/</span>
        <Button
          variant="light"
          className={`text-primary-foreground/50 hover:text-primary-foreground ${
            activeApp === 'TestFlight' ? 'text-primary-foreground font-medium' : ''
          }`}
          onPress={() => setActiveApp('TestFlight')}
        >
          TestFlight
        </Button>
        <span className="mx-1 text-primary-foreground/50">/</span>
        <Button
          variant="light"
          className={`text-primary-foreground/50 hover:text-primary-foreground ${
            activeApp === 'App' ? 'text-primary-foreground font-medium' : ''
          }`}
          onPress={() => setActiveApp('App')}
        >
          App
        </Button>
      </div>

      <NavbarContent className="ml-auto h-12 max-w-fit items-center gap-8" justify="end">
        {/* Search Bar - Removed white background */}
        <NavbarItem className="hidden lg:flex">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-transparent shadow-none hover:bg-primary-400/30 focus-within:!bg-primary-400/30",
              input: "text-primary-foreground placeholder:text-primary-foreground/60",
              innerWrapper: "bg-transparent"
            }}
            placeholder="Search..."
            radius="full"
            startContent={
              <Icon
                className="text-primary-foreground/60"
                icon="solar:magnifer-linear"
                width={20}
              />
            }
          />
        </NavbarItem>

        {/* Mobile search */}
        <NavbarItem className="lg:hidden">
          <Button isIconOnly radius="full" variant="light">
            <Icon
              className="text-primary-foreground/60"
              icon="solar:magnifer-linear"
              width={20}
            />
          </Button>
        </NavbarItem>

        {/* Notifications - Removed white popover background */}
        <NavbarItem>
          <Popover 
            offset={12} 
            placement="bottom-end"
            classNames={{
              content: "bg-transparent shadow-none p-0"
            }}
          >
            <PopoverTrigger>
              <Button
                isIconOnly
                radius="full"
                variant="light"
              >
                <Badge color="danger" content="5" showOutline={false} size="md">
                  <Icon
                    className="text-primary-foreground/60"
                    icon="solar:bell-linear"
                    width={22}
                  />
                </Badge>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <NotificationsCard className="bg-primary-500 border border-primary-400" />
            </PopoverContent>
          </Popover>
        </NavbarItem>

        {/* User Menu - 30px gap from notifications */}
        <NavbarItem className="ml-[30px]">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button isIconOnly variant="light" radius="full">
                <Avatar 
                  size="sm" 
                  src="https://i.pravatar.cc/150?u=a04258114e29526708c"
                  classNames={{
                    base: "border-2 border-primary-foreground/20 hover:border-primary-foreground/40"
                  }}
                />
              </Button>
            </DropdownTrigger>
            <DropdownMenu 
              aria-label="Profile Actions" 
              variant="faded"
              classNames={{
                base: "bg-primary-500 border border-primary-400"
              }}
            >
              <DropdownItem key="profile" className="h-14 gap-2 bg-primary-400">
                <p className="font-semibold text-primary-foreground">Signed in as</p>
                <p className="font-semibold text-primary-foreground">johndoe@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings" className="text-primary-foreground hover:bg-primary-400">
                My Settings
              </DropdownItem>
              <DropdownItem key="logout" className="text-danger hover:bg-primary-400">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-primary-500">
        <NavbarMenuItem>
          <Button 
            variant="light" 
            className="w-full justify-start text-primary-foreground"
            onPress={() => setActiveApp('iOS App')}
          >
            iOS App
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button 
            variant="light" 
            className="w-full justify-start text-primary-foreground"
            onPress={() => setActiveApp('TestFlight')}
          >
            TestFlight
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button 
            variant="light" 
            className="w-full justify-start text-primary-foreground"
            onPress={() => setActiveApp('App')}
          >
            App
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
}