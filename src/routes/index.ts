

router.get("/", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("Hello world");
});

router.use("/manga", manga);
router.use("/animes", anime);
router.use("/genres", genre);

export default router;
