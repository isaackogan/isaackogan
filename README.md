<a href="https://www.eulerstream.com/websockets" target="_blank">
    <img src="https://www.eulerstream.com/api/advert?l2=WebSocket+API&r=15&b=1.5&bc=404854&o=0.95"/>
</a>

<br/>

```protobuf
message IsaacKogan {
  required int32 age = 20;
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
