import { Container, Grid, Image, Loading, Row, Text } from "@nextui-org/react";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { ApiRequests } from "./types";

function App() {
  const [data, setData] = useState<{ [key: string]: ApiRequests[] }>({ STO: [], ELF: [], ELH: [], GAB: [] });
  const [fetching, setFetching] = useState(false);

  const getRequests = useCallback(async () => {
    try {
      setFetching(true);
      const resp = await axios.get<{ [key: string]: ApiRequests[] }>("https://pink-tense-oyster.cyclic.app/requests");
      const sortedData: typeof data = {};
      Object.entries(resp.data).forEach((site) => {
        sortedData[site[0]] = site[1].sort((a, b) => b.dateTime - a.dateTime);
      });
      console.log("SORTED DATA");
      setData(sortedData);
    } catch (error) {
      console.log("OOPS", error);
    } finally {
      setFetching(false);
    }
  }, []);

  useEffect(() => {
    getRequests();
  }, [getRequests]);

  return (
    <Container fluid className="min-h-screen bg-slate-500 m-0 min-w-full pb-20 pt-4" display="flex" >
      <Grid.Container gap={8}>
        <Grid xs={6} justify="center" alignItems="center">
          <div className="max-w-[600px] min-w-[400px]">
            <Row align="center" justify="center" className="space-x-4 mb-4 h-[80px]">
              <div>
                <Image
                  width="80px"
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Stoney_Indian_Pass.jpg/1920px-Stoney_Indian_Pass.jpg"
                  }
                  alt=""
                  css={{ margin: 0 }}
                />
              </div>
              <Text size="x-large" color="white" weight="bold">
                Stoney Indian Lake
              </Text>
            </Row>
            <Grid.Container>
              <Grid xs={6}>
                <Text color="white" weight="bold">
                  DateTime
                </Text>
              </Grid>
              <Grid xs={3} justify="center">
                <Text color="white" weight="bold">
                  8/11/23
                </Text>
              </Grid>
              <Grid xs={3} justify="center">
                <Text color="white" weight="bold">
                  8/12/23
                </Text>
              </Grid>
            </Grid.Container>
            {!fetching ? (
              <div className="max-h-[200px] overflow-y-auto bg-slate-50">
                <Grid.Container gap={2}>
                  {data["STO"].map((req) => (
                    <React.Fragment key={req.dateTime}>
                      <Grid xs={6} className="p-2" justify="space-between">
                        <Text className="">{new Date(req.dateTime).toLocaleString()}</Text>
                      </Grid>
                      <Grid xs={3} justify="center">
                        {req.availability["2023-08-11"].remaining}
                      </Grid>
                      <Grid xs={3} justify="center">
                        {req.availability["2023-08-12"].remaining}
                      </Grid>
                    </React.Fragment>
                  ))}
                </Grid.Container>
              </div>
            ) : (
              <Row justify="center" className="mt-20">
                <Loading color="white" />
              </Row>
            )}
          </div>
        </Grid>
        <Grid xs={6} justify="center" alignItems="center">
          <div className="max-w-[600px] min-w-[400px]">
            <Row align="center" justify="center" className="space-x-4 mb-4 h-[80px]">
              <div>
                <Image
                  width="80px"
                  src={"https://roamingbearmedia.files.wordpress.com/2018/06/20140801_gnp_br_elizlkftl300x300.jpeg"}
                  alt=""
                  css={{ margin: 0 }}
                />
              </div>
              <Text size="x-large" color="white" weight="bold">
                Elizabeth Lake Foot
              </Text>
            </Row>
            <Grid.Container>
              <Grid xs={6}>
                <Text color="white" weight="bold">
                  DateTime
                </Text>
              </Grid>
              <Grid xs={3} justify="center">
                <Text color="white" weight="bold">
                  8/09/23
                </Text>
              </Grid>
              <Grid xs={3} justify="center">
                <Text color="white" weight="bold">
                  8/10/23
                </Text>
              </Grid>
            </Grid.Container>
            {!fetching ? (
              <div className="max-h-[200px] overflow-y-auto bg-slate-50">
                <Grid.Container gap={2}>
                  {data["ELF"].map((req) => (
                    <React.Fragment key={req.dateTime}>
                      <Grid xs={6} className="p-2" justify="space-between">
                        <Text className="">{new Date(req.dateTime).toLocaleString()}</Text>
                      </Grid>
                      <Grid xs={3} justify="center">
                        {req.availability["2023-08-09"].remaining}
                      </Grid>
                      <Grid xs={3} justify="center">
                        {req.availability["2023-08-10"].remaining}
                      </Grid>
                    </React.Fragment>
                  ))}
                </Grid.Container>
              </div>
            ) : (
              <Row justify="center" className="mt-20">
                <Loading color="white" />
              </Row>
            )}
          </div>
        </Grid>
        <Grid xs={6} justify="center" alignItems="center">
          <div className="max-w-[600px] min-w-[400px]">
            <Row align="center" justify="center" className="space-x-4 mb-4 h-[80px]">
              <div>
                <Image
                  width="80px"
                  src={
                    "https://preview.redd.it/ta0g01eb07q01.jpg?width=960&crop=smart&auto=webp&v=enabled&s=8d3f97487a0a8f2c5f75657a6b49890ffe3e7ee1"
                  }
                  alt=""
                  css={{ margin: 0 }}
                />
              </div>
              <Text size="x-large" color="white" weight="bold">
                Elizabeth Lake Head
              </Text>
            </Row>
            <Grid.Container>
              <Grid xs={6}>
                <Text color="white" weight="bold">
                  DateTime
                </Text>
              </Grid>
              <Grid xs={3} justify="center">
                <Text color="white" weight="bold">
                  8/09/23
                </Text>
              </Grid>
              <Grid xs={3} justify="center">
                <Text color="white" weight="bold">
                  8/10/23
                </Text>
              </Grid>
            </Grid.Container>
            {!fetching ? (
              <div className="max-h-[200px] overflow-y-auto bg-slate-50">
                <Grid.Container gap={2}>
                  {data["ELH"].map((req) => (
                    <React.Fragment key={req.dateTime}>
                      <Grid xs={6} className="p-2" justify="space-between">
                        <Text className="">{new Date(req.dateTime).toLocaleString()}</Text>
                      </Grid>
                      <Grid xs={3} justify="center">
                        {req.availability["2023-08-09"].remaining}
                      </Grid>
                      <Grid xs={3} justify="center">
                        {req.availability["2023-08-10"].remaining}
                      </Grid>
                    </React.Fragment>
                  ))}
                </Grid.Container>
              </div>
            ) : (
              <Row justify="center" className="mt-20">
                <Loading color="white" />
              </Row>
            )}
          </div>
        </Grid>
        <Grid xs={6} justify="center" alignItems="center">
          <div className="max-w-[600px] min-w-[400px]">
            <Row align="center" justify="center" className="space-x-4 mb-4 h-[80px]">
              <div>
                <Image
                  width="80px"
                  src={"https://mtnhiker.files.wordpress.com/2012/05/img_2211.jpg?w=1000&h=666"}
                  alt=""
                  css={{ margin: 0 }}
                />
              </div>
              <Text size="x-large" color="white" weight="bold">
                Gable Creek
              </Text>
            </Row>
            <Grid.Container>
              <Grid xs={9}>
                <Text color="white" weight="bold">
                  DateTime
                </Text>
              </Grid>
              <Grid xs={3} justify="center">
                <Text color="white" weight="bold">
                  8/09/23
                </Text>
              </Grid>
            </Grid.Container>
            {!fetching ? (
              <div className="max-h-[200px] overflow-y-auto bg-slate-50">
                <Grid.Container gap={2}>
                  {data["GAB"].map((req) => (
                    <React.Fragment key={req.dateTime}>
                      <Grid xs={9} className="p-2" justify="space-between">
                        <Text className="">{new Date(req.dateTime).toLocaleString()}</Text>
                      </Grid>
                      <Grid xs={3} justify="center">
                        {req.availability["2023-08-09"].remaining}
                      </Grid>
                    </React.Fragment>
                  ))}
                </Grid.Container>
              </div>
            ) : (
              <Row justify="center" className="mt-20">
                <Loading color="white" />
              </Row>
            )}
          </div>
        </Grid>
      </Grid.Container>
    </Container>
  );
}

export default App;
