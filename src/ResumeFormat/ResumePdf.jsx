import React from "react";
import { useSelector } from "react-redux"; // updated

import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Svg,
  Line,
} from "@react-pdf/renderer";

const BORDER_COLOR = "#bfbfbf";
const BORDER_STYLE = "solid";
// const COL1_WIDTH = 10;
// const COLN_WIDTH = (100 - COL1_WIDTH) / 4;
Font.register({
  family: "Noto Sans Tamil",
  src:
    "https://fonts.gstatic.com/ea/notosanstamil/v3/NotoSansTamil-Regular.ttf",
});

const styles = StyleSheet.create({
  centerText: {
    textAlign: "center",
  },
  rightText: {
    textAlign: "right",
  },
  summary: {
    padding: 5,
  },
  dFlex: {
    display: "flex",
    flexDirection: "row",
  },

  dFlexC: {
    display: "flex",
    flexDirection: "column",
  },
  dFlexSB: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dFlexSA: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header2: {
    fontSize: 16,
  },
  marginTop10: {
    marginTop: 10,
  },
  marginTop20: {
    marginTop: 20,
  },
  marginTop3: {
    marginTop: 3,
  },
  marginTop6: {
    marginTop: 6,
    textAlign: "center",
  },
  width70: {
    width: "30%",
  },
  colorGrey: {
    color: "#595959",
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontSize: 12,
    fontFamily: "Noto Sans Tamil",
    color: "#000",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderTopWidth: 10,
    borderRightWidth: 10,
    borderLeftWidth: 10,
    borderBottomWidth: 10,
  },

  clientName: {
    fontSize: 18,
  },

  clientAdress: {
    marginTop: 5,
    color: "#595959",
  },

  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});
const ResumePdf = () => {
  const ProDetail = useSelector((state) => state.Profile);
  const ExpSummary = useSelector((state) => state.ExpSummary);
  const EmpHistory = useSelector((state) => state.Employment);
  const EduDetails = useSelector((state) => state.Education);
  const WebDetails = useSelector((state) => state.Website);
  const SkillDetails = useSelector((state) => state.Skills);
  return (
    <PDFViewer height="700px" width="100%">
      <Document size="A4" title="withdraw.pdf">
        <Page style={styles.body}>
          {/* header Section */}
          <View>
            <View style={styles.marginTop20}>
              <Text style={[styles.header2, styles.centerText]}>RESUME</Text>
            </View>
            <View style={[styles.dFlexSB, styles.marginTop3]}>
                <Text> Name</Text>
                <Text style={styles.colorGrey}>
                  VENKATESH PRASAD
                  <Text>{ProDetail?.name}</Text>
                </Text>
              </View>
              <View style={[styles.dFlexSB, styles.marginTop3]}>
                <Text> Email</Text>
                <Text style={styles.colorGrey}>
            venkateshselvaraj0809@gmail.com
                  <Text>{ProDetail?.email}</Text>
                </Text>
              </View>
              <View style={[styles.dFlexSB, styles.marginTop3]}>
                <Text> Mobile Number</Text>
                <Text style={styles.colorGrey}>
                9215468732
                  <Text>{ProDetail?.mobile_number}</Text>
                </Text>
              </View>
          </View>

          {/* Summary Section  */}
         
            <View style={styles.marginTop20}>
              <Text style={[styles.header2, styles.centerText]}>
                Profile Summary
              </Text>
              <View>
                <Svg height="5" width="495">
                  <Line
                    x1="0"
                    y1="5"
                    x2="500"
                    y2="5"
                    strokeWidth={2}
                    stroke="rgb(0,0,0)"
                  />
                </Svg>
              </View>
              <Text style={[styles.summary, styles.colorGrey]}>
                <Text>
                  A front-end developer with entry-level experience specializing
                  in web development, UI design, HTML,CSS and ReactJS Adept at
                  identifying opportunities to enhance front-end design and
                  improve the UX.
                </Text>
              </Text>
             
              <Text style={[styles.marginTop10, styles.colorGrey]}></Text>
            </View>
          

          {/* Experience Section  */}

          <View>
            <Text
              style={[styles.header2, styles.centerText, styles.marginTop20]}
            >
              Experience
            </Text>

            <View>
              <Svg height="5" width="495">
                <Line
                  x1="0"
                  y1="5"
                  x2="500"
                  y2="5"
                  strokeWidth={2}
                  stroke="rgb(0,0,0)"
                />
              </Svg>
            </View>

            <View style={[styles.dFlex, styles.marginTop10, styles.centerText]}>
              <Text style={styles.colorGrey}>Company Name: </Text>
              <Text>CODERPLAYS</Text>
              {/* <Text>{EmpHistory?.company_name}</Text> */}
            </View>
            <View style={[styles.dFlex, styles.marginTop10, styles.centerText]}>
              <Text style={styles.colorGrey}>Designation: </Text>
              <Text>Front End Developer</Text>
              {/* <Text>{EmpHistory?.designation}</Text> */}
            </View>
            <View style={[styles.dFlex, styles.marginTop10, styles.centerText]}>
              <Text style={[styles.colorGrey, styles.centerText]}>
                Salary:{" "}
              </Text>
              <Text>10000</Text>
              {/* <Text>{EmpHistory?.salary}</Text> */}
            </View>
            <View style={[styles.dFlex, styles.marginTop10]}>
              <Text style={styles.colorGrey}>Location: </Text>
              <Text>Thiruppur</Text>
              {/* <Text>{EmpHistory?.location}</Text> */}
            </View>
          </View>

          {/* Skill Section  */}
          <View>
            <Text
              style={[styles.header2, styles.centerText, styles.marginTop20]}
            >
              Skills
            </Text>
            <View>
              <Svg height="5" width="495">
                <Line
                  x1="0"
                  y1="5"
                  x2="500"
                  y2="5"
                  strokeWidth={2}
                  stroke="rgb(0,0,0)"
                />
              </Svg>
            </View>
            <View style={[styles.dFlex, styles.marginTop10]}>
              <Text style={styles.colorGrey}>Technical skills: </Text>
              <Text>HTML5, CSS, JAVASCRIPT ,REACT, GITHUB</Text>
            </View>
            <View style={[styles.dFlex, styles.marginTop10]}>
              <Text style={styles.colorGrey}>Soft Skills: </Text>
              <Text>Communication, ProblemSolving, Creativity, TeamWork</Text>
            </View>
          </View>

          {/* Education Section  */}
         
            <View>
              <Text
                style={[styles.header2, styles.centerText, styles.marginTop20]}
              >
                Education Details
              </Text>
              <View>
                <Svg height="5" width="495">
                  <Line
                    x1="0"
                    y1="5"
                    x2="500"
                    y2="5"
                    strokeWidth={2}
                    stroke="rgb(0,0,0)"
                  />
                </Svg>
              </View>
            </View>
         
        
            
                  <View style={styles.marginTop10}>
                    <View style={[styles.dFlexSB, styles.marginTop3]}>
                      <Text style={styles.colorGrey}>
                        Velalar college of Engineering and Technology
                      </Text>
                      
                    
                    </View>

                    <View style={[styles.dFlexSB, styles.marginTop3]}>
                      <Text>BE Computer Science </Text>
                     
                      <Text style={styles.colorGrey}> 2017 - 2021 </Text>
                   
                    </View>
                  </View>

                  <View style={styles.marginTop10}>
                    <View style={[styles.dFlexSB, styles.marginTop3]}>
                      <Text style={styles.colorGrey}>
                        S.R.C.Memorial Matriculation Higher Secondary School{" "}
                      </Text>
                    </View>
                    <View style={[styles.dFlexSB, styles.marginTop3]}>
                      <Text> Higher Secondary </Text>
                      <Text style={styles.colorGrey}> 2015 - 2017 </Text>
                    </View>
                  </View>
                  <View style={styles.marginTop10}>
                    <View style={[styles.dFlexSB, styles.marginTop3]}>
                      <Text style={styles.colorGrey}>
                        S.R.C.Memorial Matriculation Higher Secondary School{" "}
                      </Text>
                    </View>
                    <View style={[styles.dFlexSB, styles.marginTop3]}>
                      <Text> Secondary School Living Certificate </Text>
                      <Text style={styles.colorGrey}> 2014 - 2015 </Text>
                    </View>
                  </View>
               

          {/* Social Media */}
          <View>
            <Text
              style={[styles.header2, styles.centerText, styles.marginTop20]}
            >
              Education
            </Text>

            <View>
              <Svg height="5" width="495">
                <Line
                  x1="0"
                  y1="5"
                  x2="500"
                  y2="5"
                  strokeWidth={2}
                  stroke="rgb(0,0,0)"
                />
              </Svg>
            </View>

            <View style={styles.marginTop10}>
              <View style={[styles.dFlexSB, styles.marginTop3]}>
                <Text style={styles.colorGrey}> Linkedin </Text>
              </View>
              <View style={[styles.dFlexSB, styles.marginTop3]}>
                <Text>venkatprasad1899 </Text>
                <Text style={styles.colorGrey}> Presently Active </Text>
              </View>
            </View>

            <View style={styles.marginTop10}>
              <View style={[styles.dFlexSB, styles.marginTop3]}>
                <Text style={styles.colorGrey}>Naukri </Text>
              </View>
              <View style={[styles.dFlexSB, styles.marginTop3]}>
                <Text> prasadnaukri@899 </Text>
                <Text style={styles.colorGrey}> Presently Active </Text>
              </View>
            </View>
            <View style={styles.marginTop10}>
              <View style={[styles.dFlexSB, styles.marginTop3]}>
                <Text style={styles.colorGrey}>Indeed </Text>
              </View>
              <View style={[styles.dFlexSB, styles.marginTop3]}>
                <Text> venkateshdeed$1901 </Text>
                <Text style={styles.colorGrey}> Presently Active</Text>
              </View>
            </View>
          </View>

          {/* Person Details */}
          <View>
            <Text
              style={[styles.header2, styles.centerText, styles.marginTop20]}
            >
              Personal Details
            </Text>

            <View>
              <Svg height="5" width="495">
                <Line
                  x1="0"
                  y1="5"
                  x2="500"
                  y2="5"
                  strokeWidth={2}
                  stroke="rgb(0,0,0)"
                />
              </Svg>
            </View>

            <View style={[styles.dFlex, styles.marginTop10, styles.centerText]}>
              <Text style={styles.colorGrey}>Course name: </Text>
              <Text>PHP</Text>
            </View>
            <View style={[styles.dFlex, styles.marginTop10, styles.centerText]}>
              <Text style={styles.colorGrey}>Course Duration: </Text>
              <Text>AUG 2021 - FEB 2022</Text>
            </View>
            <View style={[styles.dFlex, styles.marginTop10, styles.centerText]}>
              <Text style={styles.colorGrey}>Intern Company Name: </Text>
              <Text>Sun Soft Solution</Text>
            </View>
            <View style={[styles.dFlex, styles.marginTop10, styles.centerText]}>
              <Text style={styles.colorGrey}>Intern Duration: </Text>
              <Text>APR 2022 - DEC 2022</Text>
            </View>
            <View style={[styles.dFlex, styles.marginTop10, styles.centerText]}>
              <Text style={[styles.colorGrey, styles.centerText]}>
                Hobbiess:{" "}
              </Text>
              <Text>Blogging</Text>

              <Text>Listening Music</Text>
              <Text>Travelling</Text>
            </View>
            <View style={[styles.dFlex, styles.marginTop10]}>
              <Text style={styles.colorGrey}>Address: </Text>
              <Text>18 , S.R.T.Back side second street Punjai Puliampatti</Text>
              <Text>{ProDetail?.address}</Text>
            </View>
            <View style={[styles.dFlex, styles.marginTop10]}>
              <Text style={styles.colorGrey}>PIN CODE: </Text>
              <Text>638459</Text>
              <Text>{ProDetail?.pin_code}</Text>
            </View>
            <View style={[styles.dFlex, styles.marginTop10]}>
              <Text style={styles.colorGrey}>State: </Text>
              <Text>Tamil Nadu</Text>
              <Text>{ProDetail?.state}</Text>
            </View>
            <View style={[styles.dFlex, styles.marginTop10]}>
              <Text style={styles.colorGrey}>Country: </Text>
              <Text>India</Text>
              <Text>{ProDetail?.country}</Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
export default ResumePdf;
