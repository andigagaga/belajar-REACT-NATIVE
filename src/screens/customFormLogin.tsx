import React from "react";
import {
  Box,
  FormControl,
  Heading,
  Input,
  VStack,
  Link,
  Button,
  HStack,
  IconButton,
  Icon,
  Image,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CustomForm() {
  return (
    <Box>
      <Box safeArea bg={"primary.300"} flex={1} p={10} width={"100%"}>
        <HStack display={"flex"} justifyContent={"center"}>
          <IconButton
            icon={
              <Icon
                as={<MaterialCommunityIcons name="facebook" />}
                size="4xl"
                color="muted.700"
              />
            }
          ></IconButton>
        </HStack>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Image
  style={{
    width: 100,
    height: 100,
    resizeMode: "contain",
    justifyContent: "center",
    borderRadius: 50, // Setengah dari lebar atau tinggi gambar
  }}
  source={{
    uri: "https://wallpapercave.com/wp/wp3738739.png",
  }}
/>

        </Box>

        <VStack mt={2}>
          <FormControl>
            <FormControl.Label></FormControl.Label>
            <FormControl />
            <Input placeholder="Enter You Phone / Email" />
          </FormControl>
          <FormControl>
            <FormControl.Label></FormControl.Label>
            <FormControl />
            <Input type="password" placeholder="enter password" />
          </FormControl>
          <VStack>
            <Button colorScheme="cyan" mt={4}>
              Login
            </Button>
            <Link mt={2} _text={{ fontSize: "xs", fontWeight: "700" }}>
              Forget Password ?
            </Link>
            <HStack>
              <IconButton
                icon={
                  <Icon
                    as={<MaterialCommunityIcons name="facebook" />}
                    size="xl"
                    color="muted.700"
                  />
                }
              ></IconButton>
              <IconButton
                icon={
                  <Icon
                    as={<MaterialCommunityIcons name="google" />}
                    size="xl"
                    color="muted.700"
                  />
                }
              ></IconButton>
              <IconButton
                icon={
                  <Icon
                    as={<MaterialCommunityIcons name="github" />}
                    size="xl"
                    color="muted.700"
                  />
                }
              ></IconButton>
            </HStack>
          </VStack>
        </VStack>
      </Box>
      <FormControl p={8}>
        <FormControl.Label></FormControl.Label>
        <Button
          textAlign="center" // Menengahkan teks placeholder secara horizontal
          paddingLeft={0} // Jarak dari kiri
          paddingRight={0} // Jarak dari kanan
          fontSize={"bold"}
          color={"blue.500"}
        >
          Buat Akun Baru
        </Button>
      </FormControl>
      <IconButton
        icon={
          <Icon
            as={<MaterialCommunityIcons name="facebook" />}
            size="xl"
            color="muted.700"
          />
        }
      ></IconButton>
    </Box>
  );
}
