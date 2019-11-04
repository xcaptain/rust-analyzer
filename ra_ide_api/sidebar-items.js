initSidebarItems({"enum":[["CompletionItemKind",""],["Edition",""],["FileSystemEdit",""],["FoldKind",""],["InlayKind",""],["InsertTextFormat",""],["RunnableKind",""],["Severity",""]],"fn":[["file_structure",""],["translate_offset_with_edit",""]],"mod":[["mock_analysis","FIXME: write short doc here"]],"struct":[["Analysis","Analysis is a snapshot of a world state at a moment in time. It is the main entry point for asking semantic information about the world. When the world state is advanced using `AnalysisHost::apply_change` method, all existing `Analysis` are canceled (most method return `Err(Canceled)`)."],["AnalysisChange",""],["AnalysisHost","`AnalysisHost` stores the current state of the world."],["Assist",""],["AssistId","Unique identifier of the assist, should not be shown to the user directly."],["CallInfo","Contains information about a call site. Specifically the `FunctionSignature`and current parameter."],["Canceled","An \"error\" signifying that the operation was canceled."],["CompletionItem","`CompletionItem` describes a single completion variant in the editor pop-up. It is basically a POD with various properties. To construct a `CompletionItem`, use `new` method and the `Builder` struct."],["CrateGraph","`CrateGraph` is a bit of information which turns a set of text files into a number of Rust crates. Each crate is defined by the `FileId` of its root module, the set of cfg flags (not yet implemented) and the set of dependencies. Note that, due to cfg's, there might be several crates for a single `FileId`! As in the rust-lang proper, a crate does not have a name. Instead, names are specified on dependency edges. That is, a crate might be known under different names in different dependent crates."],["CrateId",""],["Diagnostic",""],["Documentation","Holds documentation"],["FeatureFlags","Feature flags hold fine-grained toggles for all user-visible features of rust-analyzer."],["FileId","`FileId` is an integer which uniquely identifies a file. File paths are messy and system-dependent, so most of the code should work directly with `FileId`, without inspecting the path. The mapping between `FileId` and path and `SourceRoot` is constant. A file rename is represented as a pair of deletion/creation."],["FilePosition",""],["FileRange",""],["Fold",""],["FunctionSignature","Contains information about a function signature"],["HighlightedRange",""],["HoverResult","Contains the results when hovering over an item"],["InlayHint",""],["LibraryData",""],["LineCol",""],["LineIndex",""],["NavigationTarget","`NavigationTarget` represents and element in the editor's UI which you can click on to navigate to a particular piece of code."],["Query",""],["RangeInfo","Info associated with a text range."],["ReferenceSearchResult",""],["Runnable",""],["SearchScope",""],["SourceChange",""],["SourceFileEdit",""],["SourceRootId","Files are grouped into source roots. A source root is a directory on the file systems which is watched for changes. Typically it corresponds to a Rust crate. Source roots might be nested: in this case, a file belongs to the nearest enclosing source root. Paths to files are always relative to a source root, and the analyzer does not know the root path of the source root at all. So, a file from one source root can't refer to a file in another source root by path."],["StructureNode",""]],"type":[["Cancelable",""]]});