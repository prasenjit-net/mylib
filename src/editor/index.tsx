import React, { FunctionComponent, useRef } from 'react';
import { Editor, Resolver } from '@craftjs/core';
import { Layers } from '@craftjs/layers';
import { Flex } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Section, Viewport } from '../elements';
import { Decorator } from '../decorator';
import { Designer } from '../designer';
import { Toolbox } from '../toolbox';
import { ToolItemProps } from '../toolbox';
import { Settings } from '../settings';

export interface TemplateEditorProps {
  elements: Resolver;
  items: ToolItemProps[];
}

export const TemplateEditor = ({ elements, items }: TemplateEditorProps) => {
  const combinedResolver = elements ? elements : {};
  combinedResolver['Section'] = Section;
  combinedResolver['Viewport'] = Viewport;
  const designRef = useRef<HTMLDivElement>(null);
  // @ts-ignore
  return (
    <Editor
      resolver={combinedResolver}
      onRender={Decorator as FunctionComponent}
    >
      <Flex w="100%" height="100%" py={1} px={2}>
        <Designer designRef={designRef} />
        <Tabs variant="enclosed" flex={1}>
          <TabList>
            <Tab>Toolbox</Tab>
            <Tab>Layers</Tab>
            <Tab>Settings</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Toolbox title="Toolbox" items={items} />
            </TabPanel>
            <TabPanel>
              <Layers expandRootOnLoad={true} />
            </TabPanel>
            <TabPanel>
              <Settings />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Editor>
  );
};
