import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    transition: {
      duration: 0.1,
    },
  },

  inView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export const fadeInFromTop: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
    transition: {
      duration: 0.1,
    },
  },

  inView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
};

export const fadeInFromBottom: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.1,
    },
  },

  inView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
};

export const fadeInFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
    transition: {
      duration: 0.1,
    },
  },

  inView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
};

export const fadeInFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
    transition: {
      duration: 0.1,
    },
  },

  inView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
};

export const fadeOut: Variants = {
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};
