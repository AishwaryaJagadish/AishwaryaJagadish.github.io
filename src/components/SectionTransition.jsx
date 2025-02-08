import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSnackbar } from 'notistack';
import { motion } from 'framer-motion';

const SectionTransition = ({ children, sectionName }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (inView) {
      enqueueSnackbar(`Welcome to ${sectionName} section!`, {
        variant: 'info',
        autoHideDuration: 2000,
        preventDuplicate: true,
      });
    }
  }, [inView, sectionName, enqueueSnackbar]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default SectionTransition; 