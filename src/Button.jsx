import { cva } from "class-variance-authority";
export const buttonVariants = cva(
  "inline-flex items-center transition-colors focus:outline-none rounded-md ring-indigo-500 ring-offset-2 focus:ring px-3 py-1.5 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-gray-950 text-gray-50 shadow hover:bg-gray-800",
        ghost: "bg-transparent text-gray-950 hover:bg-gray-200 visible:bg-gray-800",
        secondary: "bg-gray-200 text-gray-950  hover:bg-gray-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
export const Button = ({ children, variant, className, ...props }) => {
  return <button className={buttonVariants({ className, variant })}>{children}</button>;
};
