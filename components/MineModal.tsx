import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { HelpCircle } from "lucide-react";
import { BombIcon } from "lucide-react";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  preload: true,
  subsets: ["latin-ext"],
  variable: "--font-nunito",
});

const features = [
  {
    name: "Objective:",
    description:
      "The goal of Minesweeper is to uncover all the hidden mines on the grid without triggering any of them.",
  },
  {
    name: "Numbers:",
    description:
      " When you click on a cell, it will reveal a number or be empty. The number indicates how many mines are adjacent to that cell (in the eight neighboring cells).",
  },
  {
    name: "Flagging:",
    description:
      "If you suspect a cell contains a mine, you can right-click (or use a flag button) to flag it. This helps you keep track of potential mine locations.",
  },
  {
    name: "Winning:",
    description:
      "You win the game when you successfully uncover all safe cells without triggering any mines.",
  },
];

const MineModal: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        isIconOnly
        onPress={onOpen}
        className="h-fit w-fit bg-transparent"
      >
        <HelpCircle
          size={18}
          className="text-gray-400 transition-colors duration-200 ease-in-out hover:text-gray-600 focus:text-gray-600"
        />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="custom-font font-sans"
        classNames={{
          body: `${nunito.variable} font-sans}`,
          header: `${nunito.variable} font-sans}`,
          footer: `${nunito.variable} font-sans}`,
          closeButton: `${nunito.variable} font-sans}`,
        }}
      >
        <ModalContent className="font-sans">
          {(onClose) => (
            <>
              <ModalHeader
                className={`${nunito.variable} flex flex-col gap-1 font-sans`}
              >
                How to Play Minesweeper
              </ModalHeader>
              <ModalBody className="font-sans">
                <dl className="xs:space-y-6 xs:text-sm max-w-xl space-y-2 text-xs leading-7 text-gray-600 md:text-base lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <BombIcon
                          className="absolute left-1 top-1 h-4 w-4 fill-slate-800 text-gray-500"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default MineModal;
