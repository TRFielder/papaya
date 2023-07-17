import { NextAuthProvider } from "@/Components/NextAuthProvider";
import { Flex, Text } from "@/Components/ClientChakra";
import NavBar from "@/Components/NavBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
  <NextAuthProvider>
    <NavBar />
    <Flex
      direction="column"
      align="center"
      marginTop="10%"
      width="100%"
      maxW="100%"
    >
      {children}
    </Flex>
  </NextAuthProvider>
);

export default DashboardLayout;
