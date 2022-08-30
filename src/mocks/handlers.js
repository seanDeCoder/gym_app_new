import { rest } from 'msw'

export const handlers = [
  rest.get('https://exercisedb.p.rapidapi.com/exercises', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
          "id": "0001",
          "name": "3/4 sit-up",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
          "id": "0002",
          "name": "45° side bend",
          "target": "abs"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0003.gif",
          "id": "0003",
          "name": "air bike",
          "target": "abs"
        },
        {
          "bodyPart": "upper legs",
          "equipment": "body weight",
          "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1512.gif",
          "id": "1512",
          "name": "all fours squad stretch",
          "target": "quads"
        },
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0006.gif",
          "id": "0006",
          "name": "alternate heel touchers",
          "target": "abs"
        },
        {
          "bodyPart": "back",
          "equipment": "cable",
          "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
          "id": "0007",
          "name": "alternate lateral pulldown",
          "target": "lats"
        },
        {
          "bodyPart": "lower legs",
          "equipment": "body weight",
          "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1368.gif",
          "id": "1368",
          "name": "ankle circles",
          "target": "calves"
        },
        {
          "bodyPart": "back",
          "equipment": "body weight",
          "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
          "id": "3293",
          "name": "archer pull up",
          "target": "lats"
        },
      ])
    )
  }),
  rest.get('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(["back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"])
    )
  }),
]