import { useTransform } from "framer-motion";
import { useMotionValue,motion } from "framer-motion";

function Bgscroll() {
  const scrollY = useMotionValue(0);

  const backgroundColor = useTransform(scrollY, [0, 100], ["black", "white"]);

  return (
    <motion.div style={{ backgroundColor }}>
      {/* your content here */}
    </motion.div>
  );
}

export default Bgscroll;
