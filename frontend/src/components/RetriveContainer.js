import {
    Tooltip,
    Container,
    SkeletonText,
    InputRightElement,
    InputGroup,
    Input,
    Button
} from '@chakra-ui/react';
import ToastBox from './ToastBox'
import { Search2Icon, ArrowForwardIcon} from "@chakra-ui/icons";

const RetriveContainer =  (props) => {
    return (
        <Container
            boxShadow='2xl'
              maxW={props.breakpoints.TextContainer}
              maxH={props.breakpoints.TextContainer}
              bg="container.light" style={{
                marginTop: "60px",
                borderRadius: "10px",
                padding: "20px",
              }}
        >
          <InputGroup alignContent="space-between" size="lg">
            
            <Input
                placeholder="Enter your retrive ID..."
                onKeyPress={props.handleSearch}
                padding={3}
            />
            <Button
              variant="solid"
              colorScheme="white"
              bg="submit.light"
              onClick={props.handleSearch}
              isLoading={props.state.loading}
            ><InputRightElement
                pointerEvents='none'
                children={<ArrowForwardIcon  />}/></Button>
          </InputGroup>
              {(props.state.started) ? <SkeletonText mt='4' noOfLines={4} spacing='4' />: (props.state.resp !== null) ? <>
                <Tooltip label="click to copy" shouldWrapChildren placement="auto">
                    <ToastBox
                      mt="10px"
                      mg="30px"
                      bw="1px"
                      br="lg"
                      width="100%"
                      minH="100px"
                      display="flex"
                      pt="20px"
                      pl="10px"
                      data={props.state.resp}
                      title='Copied to Clipboard.'
                      description="Text copied to you clipboard."
                      status='success'
                      duration={1500}
                      closable={true}
                      textarea={true}
                      isCode={(props.state.resp.meta.isCode !== undefined) ? props.state.resp.meta.isCode : false}
                    />
                </Tooltip>
              </>: <div></div>}
        </Container>
    )
}
export default RetriveContainer;
