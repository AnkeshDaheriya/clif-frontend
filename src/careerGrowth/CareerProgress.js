import { useEffect, useState } from "react";
import {
  Target,
  Activity,
  Telescope,
  BookOpen,
  ChevronRight,
  Briefcase,
  Clock,
  ChartNoAxesCombined,
  Medal,
} from "lucide-react";
import SideBar from "../dashboard/common/SideBar";
import Header from "../dashboard/common/Header";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const CareerProgress = () => {
  const { id } = useParams();
  const [selectedMilestone, setSelectedMilestone] = useState("1");
  const [selectedKey, setSelectedKey] = useState("goal");
  const [setActive] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [data, setData] = useState({
    milestones: {
      1: {
        goal: "hello",
      },
    },
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUserInfo(JSON.parse(user));
    }
  }, []);

  useEffect(() => {
    if(userInfo._id)
    fetchMilestones();
  }, [userInfo]);

  const fetchMilestones = async () => {
    try {
        const response = await axios.post(
          "http://localhost:5000/mileStone/getMileStones",
          {
            userId: userInfo._id,
          }
        );
        if (response.data.data) {
          setData(response.data.data);
        } else {
          console.log("something went wrong");
        }
    } catch (error) {
      console.log(`Error fetching milestones: ${error}`);
    }
  };

  useEffect(() => {
    if (id && data.milestones[id]) {
      setSelectedMilestone(id);
      setSelectedKey("goal");
    }
  }, [id, data.milestones]);

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };

  const getIcon = (key) => {
    const icons = {
      goal: <Target className="text-blue-500" />,
      keyActivities: <Activity className="text-cyan-500" />,
      learningResources: <BookOpen className="text-orange-500" />,
      focusArea: <Telescope />,
      jobRoleDevelopment: <Briefcase />,
      kpis: <ChartNoAxesCombined />,
      measurableOutcomes: <Medal />,
    };
    return icons[key] || <ChevronRight className="h-5 w-5 text-muted" />;
  };

  const renderDurationTimeLine = () => {
    const durationMonths =
      data.milestones[selectedMilestone]?.timeline?.durationMonths;
    if (!durationMonths) {
      return (
        <div>
          <p> </p>
        </div>
      );
    }

    return (
      <div className="bg-white p-3 mb-4 rounded shadow-sm w-25">
        <h3 className="fs-3.5 align-items-center d-flex justify-content-center">
          <Clock className="w-2 h-2 text-blue-200" />
          Timeline & Duration
        </h3>
        <div className="relative d-flex justify-content-center">
          <p>{durationMonths} Month</p>
        </div>
      </div>
    );
  };

  const renderContent = (content, key) => {
    if (Array.isArray(content)) {
      return (
        <ul className="list-unstyled pl-4">
          {content.map((item, index) => (
            <li key={index} className="d-flex align-items-center mb-2">
              <div
                className="rounded-circle bg-primary"
                style={{ width: "10px", height: "10px" }}
              ></div>
              <span className="ms-2">{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (typeof content === "object") {
      return (
        <div className="space-y-4">
          {Object.entries(content).map(([key, value]) => (
            <div key={key}>
              <h5>{key}</h5>
              {renderContent(value, key)}
            </div>
          ))}
        </div>
      );
    }

    return <p>{content}</p>;
  };

  const milestoneKeys = [
    "goal",
    ...Object.keys(data.milestones[selectedMilestone] || {}).filter(
      (key) => key !== "timeline" && key !== "goal"
    ),
  ];

  return (
    <>
      <div className="main-wrapper">
        {/* Sidebar and Header */}
        <SideBar onButtonClick={ToggleEvent} />
        <div className="body-wrapper">
          <div className="page-wrapper">
            <Header onButtonClick={ToggleEvent} />
            <div className="container my-4 p-3 border rounded">
              <div className="mb-4">
                <div className="d-flex overflow-auto bg-gray p-3 rounded shadow-sm">
                  {Object.keys(data.milestones).map((milestone) => (
                    <button
                      key={milestone}
                      onClick={() => setSelectedMilestone(milestone)}
                      className={`btn ms-3 text-start fs-3 ml-1 ${
                        selectedMilestone === milestone
                          ? "text-primary border-black "
                          : "text-secondary"
                      }`}
                    >
                      Milestone {milestone}
                    </button>
                  ))}
                </div>
              </div>

              {/* Render the Timeline for the selected milestone */}
              <div className="fs-3">{renderDurationTimeLine()}</div>

              {/* The rest of the content rendering */}
              <div className="row">
                <div className="col-md-4">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h3 className="h5 mb-3">Milestone Details</h3>
                    <div className="list-group">
                      {milestoneKeys.map((key) => (
                        <button
                          key={key}
                          onClick={() => setSelectedKey(key)}
                          className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${
                            selectedKey === key
                              ? "bg-light text-primary"
                              : "text-secondary"
                          }`}
                          style={{ textTransform: "capitalize" }}
                        >
                          <div className="d-flex align-items-center">
                            {getIcon(key)}
                            <span className="ms-2">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </span>
                          </div>
                          <ChevronRight
                            className={`h-4 w-4 ${
                              selectedKey === key ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-md-8">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h3
                      className="d-flex align-items-center h5 mb-4"
                      style={{ textTransform: "capitalize" }}
                    >
                      {getIcon(selectedKey)}
                      <span className="ms-2">
                        {selectedKey.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                    </h3>
                    {renderContent(
                      data.milestones[selectedMilestone][selectedKey],
                      selectedKey
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerProgress;