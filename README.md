## Hey, I'm Isaac! 👋

- Working on scraping libraries for every platform!
- Reach me at [info@isaackogan.com](mailto:info@isaackogan.com) for questions, concerns, and with dog photos
- Connect with me on [LinkedIn](https://www.linkedin.com/in/isaackogan/). 

```protobuf
message IsaacKogan {
  required int32 age = 19;
  required Schools schools = 3;
  required Languages languages = 4;

  message Schools {
    required string university = 1; // York University, BSc (Class of 2026)
    required string highSchool = 2; // Westmount C.I. & King City S.S.
    required string middleSchool = 3; // Academy for Gifted Children - P.A.C.E.
  }

  message Languages {
    required int32 python = 1;
    required int32 typescript = 2;
    required int32 php = 3;
    required int32 java = 4;
  }
}

```
