import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-certifications-awards",
  templateUrl: "./certifications-awards.component.html",
  styleUrls: ["./certifications-awards.component.scss"]
})
export class CertificationsAwardsComponent implements OnInit {
  certificationsList: any[] = [
    {
      title: "Microsoft Certified Azure Developer",
      from: "Microsoft",
      date: "2021"
    },
    {
      title: "Advanced EcoSys Configuration",
      from: "Hexagon",
      date: "2021"
    },
    {
      title: "Microsoft Certified Azure Fundamentals ",
      from: "Microsoft",
      date: "2021"
    },
    {
      title: "Prosci Certified Change Practitioner",
      from: "Prosci / Dow",
      date: "2019"
    },
    {
      title: "Developing with InterSystems Objects and SQLs",
      from: "InterSystems",
      date: "2018"
    },
    {
      title: "Building and Managing HL7 Productions",
      from: "InterSystems",
      date: "2017"
    },
    {
      title: "Cache Foundations",
      from: "InterSystems",
      date: "2017"
    },
    {
      title: "HealthShare Information Exchange Fundamentals",
      from: "InterSystems",
      date: "2017"
    }
  ];

  awardsList: any[] = [
    {
      title:
        "First Prize Scholarship of National University Student Innovation Program (Top 1%)",
      date: "2009"
    },
    {
      title: "Outstanding Student Awards (Top 2%)",
      date: "2007, 2008 & 2009"
    },
    {
      title: "Major Award of Jilin University (Top 5%)",
      date: "2008 & 2009"
    },
    {
      title: "Suzhou Gongyeyuan Scholarship",
      date: "2007"
    },
    {
      title: "Dongrong Scholarship",
      date: "2007"
    },
    {
      title: "National Scholarship of China (Top 1%)",
      date: "2007"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
