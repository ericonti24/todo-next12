const testList = [{name: "Eric", sport: "Soccer"}, {name: "Haley", sport: "Soccer"},]

export default function handler(req, res) {
    res.status(200).json(testList);
  }