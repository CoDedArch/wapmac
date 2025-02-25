export const Variant1 = {
  hidden: { x: -700 },
  visible: {
    x: 0,
    transition: { duration: 1.5, delay: 0.2, ease: "easeOut" },
  },
};

export const Variant2 = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { duration: 1.5, delay:0.5, ease: "easeOut" } },
};
export const Variant3 = {
  hidden: { scale: 0.5 },
  visible: { scale: 1, transition: { duration: 1.5, delay:0.2, ease: "easeIn" } },
};
