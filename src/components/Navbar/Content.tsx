import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "../ui/navigation-menu"
import { cn } from "../../lib/utils";
import { ChevronDownIcon } from "lucide-react";


const components: { title: string; href: string; description: string }[] = [
    {
        title: "Electronics",
        href: "/products?category=electronics",
        description: "Smartphones, laptops, tablets, cameras, audio equipment, and other gadgets",
    },
    {
        title: "Apparel & Fashion",
        href: "/products?category=clothes",
        description: "Clothing, shoes, accessories, fashion-related items",
    },
    {
        title: "Home and Furniture",
        href: "/products?category=furniture",
        description: "Furniture, decor, bedding, kitchenware, and other home-related products",
    },
    {
        title: "Fitness and Wellness",
        href: "/products?category=latest-deals",
        description: "Fitness trackers, exercise equipment, and products for overall well-being",
    },
    {
        title: "Beauty and Personal Care",
        href: "/products?category=beauty",
        description: "Skincare, haircare, cosmetics, grooming products, and personal care items",
    },
    {
        title: "Jewelry and Accessories",
        href: "/products?category=jewelry",
        description: "Rings, necklaces, bracelets, watches, and other jewelry and accessories",
    },
]


const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"


export function CategoryNavMenu() {
    return (

        <NavigationMenu className="-ml-4">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className=' bg-inherit text-white hover:bg-inherit hover:text-[#616161] text-[12pt]'>Category</NavigationMenuTrigger>
                    <NavigationMenuContent className="">
                        <ul className="grid w-[250px]  gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    <div className="text-[8pt]">
                                        {component.description}
                                    </div>
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <a href="/">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Products
                        </NavigationMenuLink>
                    </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className=' bg-inherit text-white hover:bg-inherit hover:text-[#616161]'>Category</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="/faqs">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            FAQs
                        </NavigationMenuLink>
                    </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="/about-us">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About us
                        </NavigationMenuLink>
                    </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="/contact-us">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Contact us
                        </NavigationMenuLink>
                    </a>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
